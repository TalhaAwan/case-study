# case-study [![Build Status](https://travis-ci.com/TalhaAwan/case-study.svg?branch=master)](https://travis-ci.com/TalhaAwan/case-study)

> Get, count, or verify uppercase and lowercase words in a string


## Install

```
$ npm install case-study
```

## Usage
```javascript
const caseStudy = require('case-study');
const str = `The library's supposed to get all upper and lower case words. 
I WANT MY MONEY BACK ... AND I'M GONNA SUE YOU.`;

caseStudy.findUpperCase(str);
// => ["I","WANT","MY","MONEY","BACK","AND","I'M",
// "GONNA","SUE","YOU"]

caseStudy.findLowerCase(str);
// => ["library's", "supposed","to","get","all","upper","and","lower","case","words"]

const wordsWithNumbers = `K2, H2O, B2B, B2C, AK47, 3G, G8, 7UP, 
and gr8, 1to1, one2one, 8pm.`;

caseStudy.findUpperCase(wordsWithNumbers);
// => ["K2","H2O","B2B","B2C","AK47","3G","G8","7UP"]

caseStudy.findLowerCase(wordsWithNumbers);
// => ["and","gr8","1to1","one2one","8pm"]

```

___

## APIs

### findUpperCase(str, options)
Returns an `Array` of upper case words

### findLowerCase(str, options)
Returns an `Array` of lower case words

### upperCaseExists(str, options)
Returns `Boolean`

### lowerCaseExists(str, options)
Returns `Boolean`

### countUpperCase(str, options)
Returns `Number`

### countLowerCase(str, options)
Returns `Number`

___

## Options

Type: `Object`

### contraction

Type: `Boolean`
Default: `true`

Count words with contraction as one

```javascript
let str = `YOU SHOULDN'T'VE HANDLED CONTRACTIONS!`;
caseStudy.findUpperCase(str, {contraction: false})
// => ["YOU","SHOULDN","T","VE","HANDLED","CONTRACTIONS"]

str = `d'y'all think I shouldn't've handled contractions?`;
caseStudy.findLowerCase(str, {contraction: false})
// => ["d","y","all","think","shouldn","t","ve","handled","contractions"]

```

### duplicate

Type: `Boolean`
Default: `true`

Include duplicate words.

```javascript
let str = `WRITING ENTIRELY IN BLOCK CAPITAL LETTERS 
IS SHOUTING, AND SHOUTING IS RUDE.`;
caseStudy.findUpperCase(str, {duplicate: false});
// => ["WRITING","ENTIRELY","IN","BLOCK","CAPITAL",
// "LETTERS","IS","SHOUTING","AND","RUDE"]

str = `He was a strange man, very strange man, indeed.`;
caseStudy.findLowerCase(str, {duplicate: false})
// => ["was","a","strange","man","very","indeed"]

```

### list

Type: `Array`

Only extract words passed in the list

```javascript
let str = "FAILURE? THE WORD FAILURE IS NOT IN MY DICTIONARY!";
caseStudy.findUpperCase(str, { list: ['FAILURE'] })
// => ["FAILURE", FAILURE]

let str = `Unfortunately, we can't give you any more discount.
We've given you the maximum possible discount.`;
caseStudy.findLowerCase(str, {list: ['you', 'discount']})
// => ["you","discount","you","discount"]
```


### exclude

Type: `Array`

Ignore words passed in the list

```javascript
let str = "PLEASE DO NOT REMOVE THE IMPORTANT PARTS OF THE SPEECH!";
caseStudy.findUpperCase(str, {exclude: ['DO', 'NOT']})
// => ["PLEASE","REMOVE","THE","IMPORTANT","PARTS","OF","THE","SPEECH"]

str = `I've just told you, it's not possible.`;
caseStudy.findLowerCase(str, {exclude: ['you', 'not']})
// => ["ve","just","told","it's","possible"]

```

___

## Related

- [extract-numbers](https://www.npmjs.com/package/extract-numbers)

## License

MIT © Talha Awan
