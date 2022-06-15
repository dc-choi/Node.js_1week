const sum = (...args) => {
	let total = 0;
	for (let idx of args)
		total += idx;
	return total;
}

/*
	for of는 배열의 값을 열거할 때 사용하고,
	for in은 오브젝트의 속성을 열거할 때 사용한다.
*/

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));
console.log(sum(1, 2, 3, 4, 5, 6, 7));
console.log(sum(1, 2, 3, 4, 5, 6));
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3));
console.log(sum(1, 2));
console.log(sum(1));