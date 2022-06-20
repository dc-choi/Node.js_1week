/**
 * 미들웨어 정의란?
 * 요청 객체, 응답 객체 그리고 애플리케이션의 요청-응답 주기에서 다음 함수에 접근할 수 있는 함수라고 해설할 수 있습니다.
 * 즉, 요청과 응답의 중간에서 목적에 맞는 특징 기능을 하는 함수입니다.
 */

import express from 'express';
import fs from 'fs';
import path from 'path';
import compression from 'compression';
import cookieSession from 'cookie-session';
import session from 'express-session';
import morgan from 'morgan';
import multer from 'multer';
import responseTime from 'response-time';
import timeout from 'connect-timeout';

const app = express(); // 4.16버전부터 body-parser를 안에 내장 함.

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(express.json({
	limit: '50mb' // 클라이언트에서 서버로 전송할 수 있는 json 데이터의 최대 크기를 50메가로 지정
}));

/**
 * 서버에서 클라이언트로 응답하는 응답 본문을 압축합니다.
 * 일반적으로 파일처럼 응답하는 데이터의 크기가 큰 경우에 사용합니다.
 * 압축한다고 무조건 좋은 것이 아님.
 * 작은 크기의 json 데이터의 경우는 압축에 소요되는 시간으로 클라이언트로 응답되는 전체 시간이 압축을 안 하는 경우보다 느려질 수 있습니다.
 * 임의의 라우터에만 설정해서 적용하는 것이 좋다고 함.
 */

// map이라는 용량이 큰 파일을 불러올 때 compression을 사용함.
app.use('/api/getMap', compression());

app.use(cookieSession({
	name: 'session',
	secret: 'key', // 암호화하는 데 쓰일 키
	maxAge: 24 * 60 * 60 * 1000 // 24시간 유지
}));

app.use(session({
	secret: 'key', // 암호화하는 데 쓰일 키
	resave: false, // 세션에 변경사항이 없어도 항상 다시 저장할지 여부
	saveUninitialized: true, // 초기화되지 않은 세션을 스토어에 강제로 저장할지 여부
	cookie: {
		httpOnly: true, // 클라이언트 JS에서 쿠키를 다룰 수 없음
		secure: true, // https 환경에서만 쿠키 정보를 주고 받도록 처리
		maxAge: 60000, // 쿠키가 유지되는 시간 (ms단위)
	},
	// store: new mysqlStore() // 세션저장소 사용
}));

/**
 * CORS는 추가 HTTP 헤더를 사용해서 도메인 또는 포트가 다른 서버의 자원에 접근할 수 있는 권한을 부여하도록 브라우저에 알려주는 체제를 말합니다.
 * 다른 도메인이나 포트에 브라우저 보안의 문제로 인해 요청을 할 수 없음.
 */
const corsOption = {
	origin: 'http://localhost:3000'
}

app.use(cors(corsOption)); // compression처럼 임의의 라우터에서만 사용가능.

/**
 * HTTP 요청에 대한 로그를 관리하는 미들웨어입니다.
 * 로그를 파일로 생성해서 기록할 수 있습니다.
 */
app.use(morgan('combined'));

const __filename = path.resolve(); // 절대 경로를 확인하는 메서드
const __dirname = path.dirname(__filename); // 파일이 위치한 디렉토리 경로 반환
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
app.use(morgan('combined', { stream: accessLogStream }));

/**
 * multer는 multi-part/form-data 데이터를 처리하기 위한 미들웨어입니다.
 * 쉽게 말해서 클라이언트에서 전송한 파일을 쉽게 업로드할 수 있게 해 주는 미들웨어입니다.
 */

/**
 * multer 모듈을 사용해서 클라이언트로부터 전송된 파일을 업로드 처리하기 위해서는 먼저 디스크 저장장소에 대한 객체를 생성해야 합니다.
 * multer의 diskStorage()를 통해 파일이 저장될 위치와 파일명을 어떻게 만들 것인지에 대한 정의를 합니다.
 */
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'uploads/'); // 콜백 함수를 통해 전송된 파일 저장 디렉토리 설정
	},
	filename: (req, file, cb) => {
		// 콜백 함수를 통해 전송된 파일 이름 설정
		cb(null, `${new Date().valueOf()}${path.extname(file.originalname)}`); // 시스템 시간으로 파일 이름 설정
	},
});

const upload = multer({ storage });

app.post('/profile', upload.single('avatar'), (req, res, next) => {
	console.log(req.file);
	console.log(req.body);
});

app.post('/photo/upload', upload.array('photo', 12), (req, res, next) => {
	console.log(req.files);
});

/**
 * response-time은 클라이언트 요청에 대한 응답 시간을 관리하는 미들웨어입니다.
 * 응답 시간을 모니터리하고 어떤 API의 응답의 오래 걸리는지 주시해야합니다.
 */
app.use(responseTime((req, res, time) => {
	console.log(`${req.method} ${req.url} ${time}`);
}));

/**
 * connect-timeout은 클라이언트의 요청에 대해서 지정된 시간동안 응답을 못하는 경우 타임아웃 기능을 제공하는 미들웨어입니다.
 * 라우터별로 타임아웃을 지정하는 것을 추천합니다.
 */
app.use(timeout('5s')); // 모든 라우터에 대해서 5초의 타임아웃 설정
app.use('/timeout', timeout('5s'), () => { // 해당 라우터에 대해서 5초의 타임아웃 설정

});
