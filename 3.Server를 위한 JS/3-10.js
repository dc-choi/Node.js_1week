const getPerson = () => {
	return {
		firstName: '존',
		lastName: '시나'
	}
};

let { firstName } = getPerson();

console.log(firstName);