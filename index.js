const findUpperCase = function (str, options = {}) {
	if (typeof str !== 'string') {
		throw new TypeError('first argument should be a string');
	}

	const upperCaseWords = getUpperCaseWords(str, options);

	return filterList(upperCaseWords, options);
};

const upperCaseExists = function (str, options = {}) {
	return Boolean(findUpperCase(str, options).length);
};

const countUpperCase = function (str, options = {}) {
	return findUpperCase(str, options).length;
};

const findLowerCase = function (str, options = {}) {
	if (typeof str !== 'string') {
		throw new TypeError('first argument should be a string');
	}

	const lowerCaseWords = getLowerCaseWords(str, options);

	return filterList(lowerCaseWords, options);
};

const lowerCaseExists = function (str, options = {}) {
	return Boolean(findLowerCase(str, options).length);
};

const countLowerCase = function (str, options = {}) {
	return findLowerCase(str, options).length;
};

// Helper
const getUpperCaseWords = function (str, options) {
	let words = [];
	if (options.contraction === false) {
		words = str.match(/(\b[A-Z0-9][A-Z0-9]+\b|\b[A-Z]\b)/g);
	} else {
		words = str.match(/(\b[A-Z0-9]['A-Z0-9]+\b|\b[A-Z]\b)/g);
	}

	return words;
};

const getLowerCaseWords = function (str, options) {
	let words = [];
	if (options.contraction === false) {
		words = str.match(/(\b[a-z0-9][a-z0-9]+\b|\b[a-z]\b)/g);
	} else {
		words = str.match(/(\b[a-z0-9]['a-z0-9]+\b|\b[a-z]\b)/g);
	}

	return words;
};

const filterList = function (wordsArr, options) {
	let filteredWords = [];
	if (options.duplicate === false) {
		wordsArr.forEach(w => {
			if (!filteredWords.includes(w)) {
				filteredWords.push(w);
			}
		});
	} else {
		filteredWords = wordsArr;
	}

	if (options.list) {
		if (Array.isArray(options.list)) {
			return filteredWords.filter(w => {
				return options.list.includes(w);
			});
		}

		throw new TypeError('`list` should be an array');
	} else if (options.exclude) {
		if (Array.isArray(options.exclude)) {
			return filteredWords.filter(w => {
				return !options.exclude.includes(w);
			});
		}

		throw new TypeError('`exclude` should be an array');
	}

	return filteredWords;
};

module.exports = {
	findUpperCase,
	findLowerCase,
	upperCaseExists,
	lowerCaseExists,
	countUpperCase,
	countLowerCase
};
