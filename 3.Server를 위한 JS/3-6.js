const words = ['qwerqwer', 'qwerqwe', 'qwerqw', 'qwerq', 'qwe', 'qw', 'q'];

const result = words.filter((word) => {
	return word.length > 5;
})

console.log(result);

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

let pass = peple.filter((person) => {
	return person.point >= 99;
});

console.log(pass);