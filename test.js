import test from 'ava';
import m from '.';
const str = `"THERE IS NO HARRY POTTER HERE!" he roared, now holding the receiver at arm's length, as though frightened it 
  might explode. "I DON'T KNOW WHAT SCHOOL YOU'RE TALKING ABOUT! NEVER CONTACT ME AGAIN! DON'T YOU COME NEAR MY FAMILY!"`;
const doubleContractionUC = 'YOU SHOULDN\'T\'VE HANDLED CONTRACTIONS! WHAT\'VE YOU DONE?.';
const doubleContractionLC = `d'y'all think I shouldn't've handled contractions? 
But what's the problem with that?`;
const wordsWithNumbers = `H2O, B2B, B2C, 3G, G8, 7UP, K2'S are uppercase words
with numbers. Whereas lowercase examples are, gr8, 1to1, one2one, 8pm, pg13, 8a's.`;
test('findUpperCase', t => {
	t.deepEqual(m.findUpperCase(str), ['THERE',
		'IS',
		'NO',
		'HARRY',
		'POTTER',
		'HERE',
		'I',
		'DON\'T',
		'KNOW',
		'WHAT',
		'SCHOOL',
		'YOU\'RE',
		'TALKING',
		'ABOUT',
		'NEVER',
		'CONTACT',
		'ME',
		'AGAIN',
		'DON\'T',
		'YOU',
		'COME',
		'NEAR',
		'MY',
		'FAMILY']);

	t.deepEqual(m.findUpperCase(wordsWithNumbers), ['H2O',
		'B2B',
		'B2C',
		'3G',
		'G8',
		'7UP',
		'K2\'S']);

	t.deepEqual(m.findUpperCase(doubleContractionUC), ['YOU',
		'SHOULDN\'T\'VE',
		'HANDLED',
		'CONTRACTIONS',
		'WHAT\'VE',
		'YOU',
		'DONE']);
});

test('findUpperCase with option `contraction` === false', t => {
	t.deepEqual(m.findUpperCase(str, {
		contraction: false
	}), ['THERE',
		'IS',
		'NO',
		'HARRY',
		'POTTER',
		'HERE',
		'I',
		'DON',
		'T',
		'KNOW',
		'WHAT',
		'SCHOOL',
		'YOU',
		'RE',
		'TALKING',
		'ABOUT',
		'NEVER',
		'CONTACT',
		'ME',
		'AGAIN',
		'DON',
		'T',
		'YOU',
		'COME',
		'NEAR',
		'MY',
		'FAMILY']);

	t.deepEqual(m.findUpperCase(wordsWithNumbers, {
		contraction: false
	}), ['H2O',
		'B2B',
		'B2C',
		'3G',
		'G8',
		'7UP',
		'K2',
		'S']);

	t.deepEqual(m.findUpperCase(doubleContractionUC, {
		contraction: false
	}), ['YOU',
		'SHOULDN',
		'T',
		'VE',
		'HANDLED',
		'CONTRACTIONS',
		'WHAT',
		'VE',
		'YOU',
		'DONE']);
});

test('findUpperCase with option `duplicate` === false', t => {
	t.deepEqual(m.findUpperCase(str, {
		duplicate: false
	}), ['THERE',
		'IS',
		'NO',
		'HARRY',
		'POTTER',
		'HERE',
		'I',
		'DON\'T',
		'KNOW',
		'WHAT',
		'SCHOOL',
		'YOU\'RE',
		'TALKING',
		'ABOUT',
		'NEVER',
		'CONTACT',
		'ME',
		'AGAIN',
		'YOU',
		'COME',
		'NEAR',
		'MY',
		'FAMILY']);
});

test('findUpperCase with `list` option', t => {
	t.deepEqual(m.findUpperCase(str, {
		list: ['HARRY', 'POTTER']
	}), ['HARRY', 'POTTER']);
});

test('throw TypeError for invalid `list` option type', t => {
	const error = t.throws(() => {
		m.findUpperCase(str, {
			list: 7
		});
	}, TypeError);
	const error2 = t.throws(() => {
		m.findLowerCase(str, {
			list: 7
		});
	}, TypeError);
	const errMsg = '`list` should be an array';
	t.is(error.message, errMsg);
	t.is(error2.message, errMsg);
});

test('findUpperCase with `exclude` option', t => {
	t.deepEqual(m.findUpperCase(str, {
		exclude: ['THERE', 'IS', 'I', 'YOU', 'YOU\'RE']
	}), ['NO',
		'HARRY',
		'POTTER',
		'HERE',
		'DON\'T',
		'KNOW',
		'WHAT',
		'SCHOOL',
		'TALKING',
		'ABOUT',
		'NEVER',
		'CONTACT',
		'ME',
		'AGAIN',
		'DON\'T',
		'COME',
		'NEAR',
		'MY',
		'FAMILY']);
});

test('throw TypeError for invalid `exclude` option type', t => {
	const error = t.throws(() => {
		m.findUpperCase(str, {
			exclude: 7
		});
	}, TypeError);
	const error2 = t.throws(() => {
		m.findLowerCase(str, {
			exclude: 7
		});
	}, TypeError);
	const errMsg = '`exclude` should be an array';
	t.is(error.message, errMsg);
	t.is(error2.message, errMsg);
});

test('upperCaseExists', t => {
	t.is(m.upperCaseExists(str), true);
});

test('countUpperCase', t => {
	t.is(m.countUpperCase(str), 24);
});

test('findLowerCase', t => {
	t.deepEqual(m.findLowerCase(str), ['he',
		'roared',
		'now',
		'holding',
		'the',
		'receiver',
		'at',
		'arm\'s',
		'length',
		'as',
		'though',
		'frightened',
		'it',
		'might',
		'explode']);

	t.deepEqual(m.findLowerCase(wordsWithNumbers), ['are',
		'uppercase',
		'words',
		'with',
		'numbers',
		'lowercase',
		'examples',
		'are',
		'gr8',
		'1to1',
		'one2one',
		'8pm',
		'pg13',
		'8a\'s']);

	t.deepEqual(m.findLowerCase(doubleContractionLC), ['d\'y\'all',
		'think',
		'shouldn\'t\'ve',
		'handled',
		'contractions',
		'what\'s',
		'the',
		'problem',
		'with',
		'that']);
});

test('findLowerCase with option `contraction` === false', t => {
	t.deepEqual(m.findLowerCase(str, {
		contraction: false
	}), ['he',
		'roared',
		'now',
		'holding',
		'the',
		'receiver',
		'at',
		'arm',
		's',
		'length',
		'as',
		'though',
		'frightened',
		'it',
		'might',
		'explode']);

	t.deepEqual(m.findLowerCase(wordsWithNumbers, {
		contraction: false
	}), ['are',
		'uppercase',
		'words',
		'with',
		'numbers',
		'lowercase',
		'examples',
		'are',
		'gr8',
		'1to1',
		'one2one',
		'8pm',
		'pg13',
		'8a',
		's']);

	t.deepEqual(m.findLowerCase(doubleContractionLC, {
		contraction: false
	}), ['d',
		'y',
		'all',
		'think',
		'shouldn',
		't',
		've',
		'handled',
		'contractions',
		'what',
		's',
		'the',
		'problem',
		'with',
		'that']
	);
});

test('findLowerCase with option `duplicate` === false', t => {
	const toMichaelScott = `I think that for you to have come here even expecting that
	 we could have a conversation like this shows how self-deluded you are Michael. 
	 Your memory has failed you greatly.`;
	t.deepEqual(m.findLowerCase(toMichaelScott, {
		duplicate: false
	}), ['think',
		'that',
		'for',
		'you',
		'to',
		'have',
		'come',
		'here',
		'even',
		'expecting',
		'we',
		'could',
		'a',
		'conversation',
		'like',
		'this',
		'shows',
		'how',
		'self',
		'deluded',
		'are',
		'memory',
		'has',
		'failed',
		'greatly']);
});

test('findLowerCase with `list` option', t => {
	t.deepEqual(m.findLowerCase(str, {
		list: ['receiver', 'explode']
	}), ['receiver', 'explode']);
});

test('findLowerCase with `exclude` option', t => {
	t.deepEqual(m.findLowerCase(str, {
		exclude: ['receiver', 'explode']
	}), ['he',
		'roared',
		'now',
		'holding',
		'the',
		'at',
		'arm\'s',
		'length',
		'as',
		'though',
		'frightened',
		'it',
		'might']);
});

test('lowerCaseExists', t => {
	t.is(m.lowerCaseExists(str), true);
});

test('countLowerCase', t => {
	t.is(m.countLowerCase(str), 15);
});

test('throw TypeError for non-string first argument', t => {
	const error = t.throws(() => {
		m.findUpperCase(9);
	}, TypeError);
	const error2 = t.throws(() => {
		m.findLowerCase(9);
	}, TypeError);
	const errMsg = 'first argument should be a string';
	t.is(error.message, errMsg);
	t.is(error2.message, errMsg);
});
