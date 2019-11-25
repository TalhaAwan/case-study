# case-study [![Build Status](https://travis-ci.com/TalhaAwan/case-study.svg?branch=master)](https://travis-ci.com/TalhaAwan/case-study)

> Get, count, or verify uppercase and lowercase words in a string


## Install

```
$ npm install case-study
```

## Usage
```javascript
const caseStudy = require('case-study');
const str = `Who do you think you just conned? 
The library's supposed to get all upper and lower case words. 
I WANT MY MONEY BACK ... DO YOU HEAR ME? I ALSO WANT MY WASTED TIME BACK!!! 
AND I'M GONNA SUE YOU.`;

caseStudy.findUpperCase(str);
// => ["I","WANT","MY","MONEY","BACK","DO","YOU","HEAR","ME",
// "I","ALSO","WANT","MY","WASTED","TIME","BACK","AND","I'M",
// "GONNA","SUE","YOU"]

caseStudy.findLowerCase(str);
// => ["do","you","think","you","just","conned","library's",
// "supposed","to","get","all","upper","and","lower","case","words"]

```

___

## APIs

### findUpperCase(str, options)
Returns an `Array` of upper case words

### findLowerCase(str, options)
Returns an `Array` of lower case words

### upperCaseExists(str, options)
Returns `Boolean`
```javascript
let str = "This text does not have an uppercase word.";
caseStudy.upperCaseExists(str);
// => false

str = "This text DOES have an uppercase word.";
caseStudy.upperCaseExists(str);
// => true
```

### lowerCaseExists(str, options)
Returns `Boolean`
```javascript

let str = "GET OVER WITH THESE EXAMPLES ALREADY!";
caseStudy.lowerCaseExists(str);
// => false

str = "Please get over with these examples as quickly as possible.";
caseStudy.lowerCaseExists(str);
// => true
```

### countUpperCase(str, options)
Returns `Number`
```javascript
const str = "FBI! HANDS BEHIND YOUR BACK AND GET DOWN ON THE FLOOR, NOW!";
caseStudy.countUpperCase(str)
// => 12
```

### countLowerCase(str, options)
Returns `Number`
```javascript
const str = `You have the right to remain silent. 
Anything you say can and will be used against you in a court of law.`
caseStudy.countUpperCase(str)
// => 20
```

___

## Options

Type: `Object`

### contraction

Type: `Boolean`
Default: `true`

Count words with contraction as one

```javascript
let str = `YOU SHOULDN'T'VE HANDLED CONTRACTIONS! WHAT'VE YOU DONE?.`;
caseStudy.findUpperCase(str, {contraction: false})
// => ["YOU","SHOULDN","T","VE","HANDLED","CONTRACTIONS","WHAT",
// "VE","YOU","DONE"]

str = `d'y'all think I shouldn't've handled contractions? 
But what's the problem with that?`;
caseStudy.findLowerCase(str, {contraction: false})
// => ["d","y","all","think","shouldn","t","ve","handled",
// "contractions","what","s","the","problem","with","that"]

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
caseStudy.findUpperCase(str, {duplicate: false})
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
We've given you the maximum discount that was possible`;
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
