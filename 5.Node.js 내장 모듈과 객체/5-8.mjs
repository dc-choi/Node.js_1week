/**
 * crypto 모듈은 다양한 암호화 기능을 제공합니다.
 * 보안이 필요한 데이터는 해당 모듈을 사용해서 암호화합니다.
 * 단방향 암호화와 양방향 암호화가 있다.
 * 양방향 암호화에는 대칭키(비밀키)와 비대칭키(공개키)가 방식이 있다.
 */

import crypto from 'crypto';

const cry = crypto.createHash('sha512').update('pw1234').digest('base64');
console.log(cry);
// createHash로 암호화할 알고리즘을 구하고, update로 암호화할 문자열을 전달하고, digest는 어떤 인코딩 방식으로 표시할지 전달합니다.

// 실제 해커들은 레인보우 테이블을 사용한다.
// 레인보우 테이블이란, 다양한 암호화 결과 값과 암호화 전 원본 값을 테이블로 가지고 있는 것
// 그래서 실무에서는 레인보우 테이블을 사용하더라도 원본 값을 알아내지 못하게 salting 암호화를 한다고 함.

// salt 생성 예제
const createSalt = () => {
	return new Promise((resolve, reject) => {
		crypto.randomBytes(64, (err, buf) => {
			if (err) reject(err);
			resolve(buf.toString('base64'));
		})
	});
}

const createCryptoPassword = async(plainText) => {
	const salt = await createSalt();

	return new Promise((resolve, reject) => {
		// 암호화할 문자열, salt, 반복 횟수, 출력될 바이트 수, 해쉬 알고리즘
		crypto.pbkdf2(plainText, salt, 9999, 64, 'sha512', (err, key) => {
			if (err) reject(err);
			resolve({ password: key.toString('base64'), salt });
		})
	})
};

const pw = await createCryptoPassword('1234');
console.log(pw.password);
console.log(pw.salt);