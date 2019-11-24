const findUpperCase = function (str, options = {}) {
	if (typeof str !== 'string') {
		throw new TypeError('first argument should be a string');
	}

	const upperCaseWords = [];
	const words = getWords(str, options);

	words.forEach(w => {
		if (w.toUpperCase() === w) {
			upperCaseWords.push(w);
		}
	});

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

	const lowerCaseWords = [];
	const words = getWords(str, options);

	words.forEach(w => {
		if (w.toLowerCase() === w) {
			lowerCaseWords.push(w);
		}
	});

	return filterList(lowerCaseWords, options);
};

const lowerCaseExists = function (str, options = {}) {
	return Boolean(findLowerCase(str, options).length);
};

const countLowerCase = function (str, options = {}) {
	return findLowerCase(str, options).length;
};

// Helper
const getWords = function (str, options) {
	let words = [];
	if (options.contraction === false) {
		words = str.match(/[A-Za-z]+/g);
	} else {
		words = str.match(/[A-Za-z']+/g);
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
