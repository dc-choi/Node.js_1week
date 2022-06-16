/**
 * process 객체는 현재 실행되고 있는 Node.js 프로세스에 대한 정보와 제어를 제공합니다.
 * 전역으로 사용할 수 있지만 모듈을 통해 명시적으로 불러오는 것이 좋습니다.
 * 일반적으로 모듈을 사용하게 되면 최상단에 선언하기 때문에 한눈에 어떤 모듈을 사용했는지 보기 좋기 때문입니다.
 * process 객체는 EventEmitter의 인스턴스로 이벤트가 발생할 때마다 리스너를 등록할 수 있습니다.
 */

import { nextTick } from 'process';

console.log(process);

process.on('beforeExit', (code) => {
	console.log(`2. 이벤트 루프에 등록된 작업 종료 후 프로세스를 종료하기 전 ${code}`);
});

process.on('exit', (code) => {
	console.log(`3. 프로세스를 종료 ${code}`);
});

console.log(`1. 콘솔에 출력되는 첫 번째 메시지`);

console.log(process.env); // 사용자 환경을 포함하는 객체를 반환.

console.log('nextTick start');

setTimeout(() => {
	console.log('setTimeout callback');
}, 0);

nextTick(() => {
	console.log('nextTick callback');
});

console.log('nextTick end');

/**
 * exit() 함수를 호출하면 실행중인 Node.js 프로세스를 종료합니다.
 * 서버를 구동중이라면, exit() 함수를 호출하는 순간 서버가 멈추게 됨.
 * 고로, 조심해서 사용해야 함.
 */
// process.exit(); // 정상종료
// process.exit(0); // 정상종료
// process.exit(1); // 비정상종료