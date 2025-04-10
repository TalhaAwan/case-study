# case-study ![build](https://github.com/TalhaAwan/case-study/actions/workflows/build.yml/badge.svg) ![npm](https://img.shields.io/npm/v/case-study) ![downloads](https://img.shields.io/npm/dm/case-study)

> Extract, count, or check uppercase and lowercase words in any string.

## Install

```
$ npm install case-study
```

## Usage

```javascript
const caseStudy = require("case-study");
const wordsWithCase = `The documentation is important. PLEASE MAKE SURE YOU'VE READ THE DOCUMENTATION.`;

caseStudy.findUpperCase(wordsWithCase);
// => ["PLEASE","MAKE","SURE","YOU'VE","READ","THE","DOCUMENTATION"]

caseStudy.findLowerCase(wordsWithCase);
// => ["documentation","is","important"]

const wordsWithNumbers = `K2, H2O, B2B, B2C, AK47, 3G, G8, 7UP, 
and gr8, 1to1, one2one, 8pm.`;

caseStudy.findUpperCase(wordsWithNumbers);
// => ["K2","H2O","B2B","B2C","AK47","3G","G8","7UP"]

caseStudy.findLowerCase(wordsWithNumbers);
// => ["and","gr8","1to1","one2one","8pm"]
```

---

## APIs

### findUpperCase(str, options)

Returns: `Array<String>` of uppercase words

### findLowerCase(str, options)

Returns: `Array<String>` of lowercase words

### upperCaseExists(str, options)

Returns: `Boolean`

### lowerCaseExists(str, options)

Returns: `Boolean`

### countUpperCase(str, options)

Returns: `Number`

### countLowerCase(str, options)

Returns: `Number`

---

## Options

Type: `Object`

### contraction

Type: `Boolean`
Default: `true`

Treat contractions as a single word.

```javascript
let str = `CONTRACTIONS ARE HANDLED TOO. SUCH AS SHOULDN'T'VE!`;
caseStudy.findUpperCase(str);
// => ["CONTRACTIONS","ARE","HANDLED","TOO","SUCH","AS","SHOULDN'T'VE"]

caseStudy.findUpperCase(str, { contraction: false });
// => ["CONTRACTIONS","ARE","HANDLED","TOO","SUCH","AS","SHOULDN","T","VE"]

str = `Similarly in lowercase. Examples: d'y'all and shouldn't've.`;
caseStudy.findLowerCase(str);
// => ["in","lowercase","d'y'all","and", "shouldn't've"]

caseStudy.findLowerCase(str, { contraction: false });
// => ["in","lowercase","d","y","all","and","shouldn","t","ve" ]
```

### duplicate

Type: `Boolean`
Default: `true`

Include duplicate words.

```javascript
let str = `SO SO MANY WORDS!`;
caseStudy.findUpperCase(str, { duplicate: false });
// => ["SO","MANY","WORDS"]

str = `He had a one on one meeting.`;
caseStudy.findLowerCase(str, { duplicate: false });
// => ["had","a","one","on","meeting"]
```

### list

Type: `Array`

Only extract words passed in the list

```javascript
let str = "WARNING: THE SYSTEM WARNING HAS BEEN LOGGED SUCCESSFULLY.";
caseStudy.findUpperCase(str, { list: ["WARNING"] });
// => ["WARNING", "WARNING"]

let str = `The package was delivered, but the delivery confirmation is pending.`;
caseStudy.findLowerCase(str, { list: ["package", "delivery"] });
// => ["package", "delivery"]
```

### exclude

Type: `Array`

Ignore words passed in the list

```javascript
let str = "PLEASE FOLLOW THE SETUP INSTRUCTIONS IN THE MANUAL.";
caseStudy.findUpperCase(str, { exclude: ["PLEASE", "SETUP"] });
// => ["FOLLOW", "THE", "INSTRUCTIONS", "IN", "THE", "MANUAL"]

let str = `your changes saved successfully!`;
caseStudy.findLowerCase(str, { exclude: ["your"] });
// => ["changes", "saved",  "successfully"]
```

---

## Related

- [extract-numbers](https://www.npmjs.com/package/extract-numbers) - Extract numbers from strings
- [deeply-nested](https://www.npmjs.com/package/deeply-nested) - Access deeply nested properties in objects

## License

MIT © Talha Awan
