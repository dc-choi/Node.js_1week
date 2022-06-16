console.log('먼저 실행됩니다.');

const timeOut = setTimeout(() => {
	console.log('1초 후에 실행됩니다.');
}, 1000);
/**
 * 설정한 밀리초 이후에 지정된 콜백 함수가 실행됩니다.
 * setTimeout 선언 시 할당한 변수명을 사용해서 clearTimeout()을 통해 setTimeoutdmf 취소할 수 있습니다.
 * 설정한 타임아웃 간격이 정확하게 밀리초 후에 실행된다는 보장은 없습니다.
 * 이벤트 루프를 블로킹하거나 이벤트 큐에 보유하고 있는 다른 실행 코드가 타임아웃의 실행을 뒤로 밀 수 있기 때문입니다.
 * 설정한 밀리초보다 더 빨리 실행되지는 않지만, 반드시 설정한 밀리초 후에 실행된다는 보장은 없다는것을 알아야 합니다.
 */

const interval = setInterval(() => {
	console.log('1초마다 실행됩니다.');
}, 1000);
/**
 * 설정한 밀리초마다 지정된 콜백 함수가 실행됩니다.
 * setInterval 선언 시 할당한 변수명을 사용해서 clearInterval()을 통해 setInterval을 취소할 수 있습니다.
 */

const immediate = setImmediate(() => {
	console.log('setImmediate의 뒤에 있는 모든 코드를 먼저 실행하고 바로 다음에 실행합니다.');
});
/**
 * 현재 이벤트 루프 주기 끝에 코드를 실행합니다. immediate가 '즉각적인'이라는 뜻이기 떄문에 즉시 실행될 거라 생각할 수 있지만
 * 실제로는 setImmediate 함수 호출뒤에 오는 모든 코드가 먼저 실행된 후 바로 다음에 실행됩니다.
 * setImmediate 선언 시 할당한 변수명을 사용해서 clearImmediate()를 통해 setImmediate를 취소할 수 있습니다.
 */

console.log('먼저 실행됩니다.2');

setTimeout(() => {
	clearInterval(interval);
}, 4000);
