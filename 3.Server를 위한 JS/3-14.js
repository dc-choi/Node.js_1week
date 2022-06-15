const func = async() => {
	await asyncFunc();
};

const asyncFunc = async() => {
	console.log('hi');
};

console.log(func());