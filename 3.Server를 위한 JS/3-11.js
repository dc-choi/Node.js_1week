const getScore = () => {
	return [70, 80, 90];
}

let [ x, y, z ] = getScore();

console.log(x);
console.log(y);
console.log(z);

const getProfile = () => {
	return [
		'qwer',
		'asdf',
		[ '1', '2', '3' ]
	]
}

let [ str, str2, [ one, two, three ] ] = getProfile();

console.log(str);
console.log(str2);
console.log(one);
console.log(two);
console.log(three);