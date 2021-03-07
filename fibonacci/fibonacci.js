const fibonacci = function (number) {
	if (number < 0) return 'OOPS';

	const sequence = [1, 1];
	for (let i = 2; i < number; i++) {
		sequence[i] = sequence[i - 2] + sequence[i - 1];
	}
	return sequence[number - 1];
};

module.exports = fibonacci;
