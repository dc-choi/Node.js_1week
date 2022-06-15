let points = [30, 100, 1, 5, 25, 10];

let sum = points.reduce((total, value) => {
	return total + value;
});

console.log(sum);