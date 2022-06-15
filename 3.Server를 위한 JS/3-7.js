let userList = [
	{
		firstName: '재석',
		lastName: '유',
		email: 'yu@gmail.com'
	},
	{
		firstName: '호동',
		lastName: '강',
		email: 'kang@gmail.com'
	},
	{
		firstName: '동철',
		lastName: '최',
		email: 'choi@gmail.com'
	},
	{
		firstName: '동엽',
		lastName: '신',
		email: 'shin@gmail.com'
	}
];

let setList = userList.map((user) => {
	return {
		fullName: user.lastName + user.firstName,
		email: user.email
	}
});

console.log(setList);