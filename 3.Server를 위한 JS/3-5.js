let fruits = ['banana', 'orange', 'apple', 'mango'];
fruits.sort();

let points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => { // 기본적으로 문자로 인식해서 숫자 정렬은 정의를 해줘야 함.
	return b - a; // 내림차순 정렬
});

fruits.reverse(); // 역순 정렬

let peple = [
	{
		name: '유재석',
		point: 100,
		city: '서울'
	},
	{
		name: '강호동',
		point: 99,
		city: '서울'
	},
	{
		name: '신동엽',
		point: 90,
		city: '서울'
	},
	{
		name: '최동철',
		point: 99,
		city: '서울'
	}
];

peple.sort((a, b) => {
	return a.point > b.point ? -1 : 1;
});

console.log(peple);