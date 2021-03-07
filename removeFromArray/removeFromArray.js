const removeFromArray = function (array, ...args) {
	const arr = [...array];
	for (let i = 0; i < args.length; i++) {
		const position = arr.indexOf(args[i]);
		if (position != -1) arr.splice(position, 1);
	}
	return arr;
};

module.exports = removeFromArray;
