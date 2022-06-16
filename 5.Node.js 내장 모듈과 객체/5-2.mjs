console.log('Hello World');
console.log('Hello %s', 'world');

const world = 'world';
console.log(`Hello ${world}`); // 일반적인 로그를 콘솔에 출력합니다.

console.error(new Error('에러 메시지 출력')); // 에러를 콘솔에 출력합니다.

const arr = [
	{ name: 'John Hoe', email: 'john@gmail.com' },
	{ name: 'Dongchul Choi', email: 'choi@gmail.com' }
]

console.table(arr); // 배열/오브젝트를 테이블 형태로 콘솔에 출력합니다.

const obj = {
	students: {
		grade1: { class: {}, class2: {} },
		grade2: { class: {}, class2: {} },
		teachers: ['choi dong chul', 'qwer']
	}
}

console.table(obj); // 배열/오브젝트를 테이블 형태로 콘솔에 출력합니다.
console.dir(obj, { depth: 2, colors: true }); // 객체를 콘솔에 출력할 때 사용합니다.

console.time('time for for-loop'); // 인수값이 일치하는 코드사이의 실행시간을 측정해서 출력합니다.
for (let i = 0; i<99999; i++) {}
console.timeEnd('time for for-loop');
