/**
 * fs 모듈은 파일 읽기, 쓰기, 삭제 그리고 폴더 생성, 삭제 등과 같은 파일 처리와 관련된 작업을 위한 모듈입니다.
 * 대부분의 함수에 대해서 동기, 비동기 방식을 지원하며, 함수명 끝에 Sync라는 이름이 붙어 있는 함수가 동기 방식입니다.
 */

import path from 'path';
import fs from 'fs';

fs.readFile('./5-1.mjs', 'utf-8', (err, data) => { // 파일을 지정한 인코딩으로 불러오는 비동기 함수
	if (err) throw err;
	console.log(data);
});

let text = fs.readFileSync('./5-1.mjs', 'utf-8'); // 파일을 지정한 인코딩으로 불러오는 동기 함수
console.log(text);

let data = "1";
// 왜인지 모르겠는데 안됌;;
// fs.writeFile('./asdf.txt'. data, 'utf-8', function(err){ // 파일을 지정한 인코딩으로 작성하는 비동기 함수
// 	if (err) throw err;
// 	console.log('파일 쓰기 완료');
// });

fs.writeFileSync('./text.txt', data, 'utf-8'); // 파일을 지정한 인코딩으로 작성하는 동기 함수

/**
 * 대상이 되는 파일의 변경 사항 여부를 감시 할 수 있습니다.
 * 변경사항이 발생하면 지정한 콜백 리스너 함수를 실행시킬 수 있습니다.
 */
const __filename = path.resolve(); // 절대 경로를 확인하는 메서드
const __dirname = path.dirname(__filename); // 파일이 위치한 디렉토리 경로 반환
fs.watchFile(`${__dirname}/text.txt`, (curr, prev) => {
	console.log(curr);
	console.log(prev);
});
