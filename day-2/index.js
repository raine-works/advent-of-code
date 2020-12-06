const getData = require('../auth/index');
const url = 'https://adventofcode.com/2020/day/2/input';

const array = [];

const run = async () => {
  const input = await getData(url);
  input.toString();

  let jsonObj = {};
  let str = '';

  for (i = 0; i < input.length; i++) {
    let index = input.charAt(i);
    if (index.match(/\n/) && str !== '') {
      let stage1 = str.split(' ');
      let num = stage1[0];
      let stage2 = num.split('-');
      jsonObj.min = parseInt(stage2[0]);
      jsonObj.max = parseInt(stage2[1]);
      jsonObj.char = stage1[1].slice(0, -1);
      jsonObj.phrase = stage1[2];
      str = '';
      array.push(jsonObj);
      jsonObj = {};
    } else {
      str += index;
    };
  };
  console.log('<--- Day two challenge --->');
  console.log(`Valid passwords in accordance to policy one: ${policyOne(array)}`);
  console.log(`Valid passwords in accordance to policy two: ${policyTwo(array)}`);
};

function policyOne(input) {
  let areValid = 0;
  for (i = 0; i < input.length; i++) {
    let ctr = 0;
    let phrase = input[i].phrase;
    let char = input[i].char
    let min = input[i].min;
    let max = input[i].max;
    for (ii = 0; ii < phrase.length; ii++) {
      if (phrase.charAt(ii) == char) {
        ctr++;
      };
    };
    if (ctr >= min && ctr <= max) {
      areValid++;
    };
  };
  return areValid;
};

function policyTwo(input) {
  let areValid = 0;
  for (i = 0; i < input.length; i++) {
    let phrase = input[i].phrase;
    let char = input[i].char
    let min = input[i].min;
    let max = input[i].max;
    if (phrase.charAt(min + 1) === char || phrase.charAt(max + 1) === char) {
      console.log(`${min}-${max} ${char}: ${phrase} VALID`);
      areValid++; 
    } else if (phrase.charAt(min + 1) === char && phrase.charAt(max + 1) === char) {
      console.log(`${min}-${max} ${char}: ${phrase} INVALID`);
    } else if (phrase.charAt(min + 1) !== char && phrase.charAt(max + 1) !== char) {
      console.log(`${min}-${max} ${char}: ${phrase} INVALID`);
    };
  };
  return areValid;
};

module.exports = run;