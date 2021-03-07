const palindromes = function (string) {
	const formattedString = string
		.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
		.replace(/\s/g, '')
		.toLowerCase();
	return formattedString === formattedString.split('').reverse().join('');
};

module.exports = palindromes;
