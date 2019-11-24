# case-study [![Build Status](https://travis-ci.com/TalhaAwan/case-study.svg?branch=master)](https://travis-ci.com/TalhaAwan/case-study)

> Get, count, or verify uppercase and lowercase words in a string


## Install

```
$ npm install case-study
```

## Usage
```javascript
const caseStudy = require('case-study');
const str = `Who do you think you just conned? The library's supposed to get all upper and lower case words. I WANT MY MONEY BACK. DO YOU HEAR ME? I ALSO WANT MY WASTED TIME BACK!!! AND I'M GONNA SUE YOU.`;

m.findUpperCase(str);

// => ["I","WANT","MY","MONEY","BACK","DO","YOU","HEAR","ME","I","ALSO","WANT","MY","WASTED","TIME","BACK","AND","I'M","GONNA","SUE","YOU"]

m.findLowerCase(str);

// => ["do","you","think","you","just","conned","library's","supposed","to","get","all","upper","and","lower","case","words"]

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
m.findUpperCase(str, {contraction: false})
// => ["I","WANT","MY","MONEY","BACK","DO","YOU","HEAR","ME","I","ALSO","WANT","MY","WASTED","TIME","BACK","AND","I","M","GONNA","SUE","YOU"]

// notice split "I'M"

m.findLowerCase(str, {contraction: false})
// => ["do","you","think","you","just","conned","library","s","supposed","to","get","all","upper","and","lower","case","words"]

// notice split "library's"

```

### duplicate

Type: `Boolean`
Default: `true`

Include duplicate words.

```javascript
m.findUpperCase(str, {duplicate: false})
// => ["I","WANT","MY","MONEY","BACK","DO","YOU","HEAR","ME","ALSO","WASTED","TIME","AND","I'M","GONNA","SUE"]

// "I", "WANT", "MY", "BACK" and "YOU" duplicate removed


m.findUpperCase(str, {duplicate: false})
// => ["do","you","think","just","conned","library's","supposed","to","get","all","upper","and","lower","case","words"]

// "you" removed
```

### list

Type: `Array`

Only extract words passed in the list

```javascript
m.findUpperCase(str, {list: ['WANT', 'MY', 'MONEY', 'BACK']})
// => ["WANT","MY","MONEY","BACK","WANT","MY","BACK"]

m.findLowerCase(str, {list: ['think', 'you', 'upper', 'lower']})
// => ["you","think","you","upper","lower"]
```


### exclude

Type: `Array`

Ignore words passed in the list

```javascript
m.findUpperCase(str, {exclude: ['WANT', 'MY', 'MONEY', 'BACK']})
// => ["I","DO","YOU","HEAR","ME","I","ALSO","WASTED","TIME","AND","I'M","GONNA","SUE","YOU"]

m.findLowerCase(str, {exclude: ['think', 'you', 'upper', 'lower']})
// => ["do","just","conned","library's","supposed","to","get","all","and","case","words"]
```

___

## Related

- [extract-numbers](https://www.npmjs.com/package/extract-numbers)

## License

MIT © Talha Awan
