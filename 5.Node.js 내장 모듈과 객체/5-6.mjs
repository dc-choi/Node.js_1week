/**
 * path 모듈은 파일과 디렉토리 경로 작업을 위한 유틸리티를 제공합니다.
 * 운영체제별로 파일 경로를 관리하는 방식이 다르다고 함.
 */

import path from "path";

// 기존 CJS와 다르게 __filename과 __dirname이 없어서 따로 생성해줘야함.
const __filename = path.resolve(); // 절대 경로를 확인하는 메서드
const __dirname = path.dirname(__filename); // 파일이 위치한 디렉토리 경로 반환
console.log(__filename);
console.log(__dirname);

console.log(path.basename(__filename)); // 경로의 마지막 부분 반환
console.log(path.basename(__filename, ' 객체')); // 다른 부분을 더 제거할 수 있다.

console.log(path.delimiter); // 환경변수 구분자를 가져옴. win=; linux=:

console.log(path.extname('index.html')); // 파일의 확장자를 반환

console.log(path.parse('/home/donchoi/test.txt')); // 문자열로 된 경로를 pathObject로 반환

console.log(path.format({ // 문자열로 된 경로를 pathObject로 반환
	dir: '/home/donchoi', // dir 값이 있으면 root 값이 있더라도 무시함
	root: '/',
	base: 'test.txt', // base 값이 있으면 name, ext 값이 있더라도 무시함
	name: 'test',
	ext: '.txt'
}));

console.log(path.isAbsolute('/home/donchoi/test.txt')); // 절대 경로인지 상대 경로인지 확인 (절대 경로면 참 반환)
console.log(path.isAbsolute('./test.txt'));

console.log(path.join('/home', 'donchoi', 'test.txt')); // 문자열로 주어진 경로들을 모두 합쳐서 하나의 경로로 만들어서 반환합니다.

console.log(path.sep); // 경로 구분자를 반환 win=\ linux=/