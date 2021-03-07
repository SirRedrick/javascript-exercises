const cap_low_lim = 65;
const low_lim = 97;

const caesar = function (string, offset) {
	return string
		.replace(/[A-Z]/g, (match) => {
			const charCode = +match.charCodeAt(0);
			return String.fromCharCode(cap_low_lim + ((charCode - cap_low_lim + (26 + (offset % 26))) % 26));
		})
		.replace(/[a-z]/g, (match) => {
			const charCode = +match.charCodeAt(0);
			return String.fromCharCode(low_lim + ((charCode - low_lim + (26 + (offset % 26))) % 26));
		});
};

module.exports = caesar;
