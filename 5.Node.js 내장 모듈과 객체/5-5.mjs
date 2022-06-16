import os from 'os';

/**
 * OS 모듈은 운영체제 관련 유틸리티 함수 및 속성 정보를 제공합니다.
 */

console.log(os.arch()); // CPU 아키텍쳐
console.log(os.cpus()); // CPU 코어 정보를 배열로 반환
console.log(os.hostname()); // 운영체제 호스트명
console.log(os.networkInterfaces()); // 네트워크 정보
console.log(os.type()); // 운영체제 타입
console.log(os.platform()); // darwin
console.log(os.release()); // 운영체제 버전
console.log(os.homedir()); // 홈 디렉토리 경로
console.log(os.tmpdir()); // 임시 파일 저장 경로
console.log(os.totalmem()); // 전체 메모리 크기
console.log(os.freemem()); // 임시 메모리 크기
