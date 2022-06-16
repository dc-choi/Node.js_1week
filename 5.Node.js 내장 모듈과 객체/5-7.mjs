/**
 * url 모듈은 인터넷 주소에 해당하는 url을 다루기 위한 모듈입니다.
 * 각각의 속성은 클래스 프로토타입의 getter 및 setter로 구현됨.
 */

const myURL = new URL('https://user:pass@sub.example.com:8080/passwd?query=string#hash');
console.log(myURL);
console.log(myURL.hash);
console.log(myURL.protocol);
console.log(myURL.username);
console.log(myURL.password);

/**
 * url 모듈을 가장 많이 사용하게 될 때는 url 정보에서 전달된 쿼리 데이터를 추출할 때입니다.
 * searchParams는 URLSearchParams 클래스로 쿼리 데이터를 조작하기 위한 다양한 내장 함수를 제공함
 */

console.log(myURL.searchParams.get('user')); // 키에 해당하는 첫 번재 값을 반환
console.log(myURL.searchParams.has('user')); // 키가 존재하는지 체크하고 있으면 true, 없으면 false
console.log(myURL.searchParams.keys()); // Iterator로 모든 키를 반환
console.log(myURL.searchParams.values()); // Iterator로 모든 값을 반환
myURL.searchParams.append('user', 'admin'); // 주어진 키로 값을 추가, 동일한 키가 이미 있으면 그대로 유지하고 하나 더 추가
console.log(myURL.searchParams.getAll('user')); // 키에 해당하는 값을 모두 배열로 반환
myURL.searchParams.delete('user'); // 해당 키를 삭제
