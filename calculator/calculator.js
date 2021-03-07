function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function sum(array) {
	if (array.length === 0) return 0;
	return array.reduce((accumulator, current) => accumulator + current);
}

function multiply(array) {
	return array.reduce((accumulator, current) => accumulator * current);
}

function power(number, power) {
	return Array(power)
		.fill(number)
		.reduce((accumulator, current) => accumulator * current);
}

function factorial(number) {
	if (number === 0) return 1;
	return number * factorial(number - 1);
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
