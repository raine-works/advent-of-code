const getData = require('../auth/index');
const url = 'https://adventofcode.com/2020/day/1/input';

const array = [];

(async () => {
  const input = await getData(url);
  input.toString();
  let str = '';
  for (i = 0; i < input.length; i++) {
    let index = input.charAt(i);
    if (index.match(/\n/) && str !== '') {
      let num = parseInt(str);
      array.push(num)
      str = '';
    } else {
      str += input.charAt(i);
    };
  };
  console.log(solveForTwo(array, 2020));
  console.log(solveForThree(array, 2020));
})();

function solveForTwo(input, check) {
  for (i = 0; i < input.length; i++) {
    let firstValue = input[i];
    for (ii = 0; ii < input.length; ii++) {
      let sum = firstValue + input[ii];
      if (sum == check) {
        // console.log(input[i], input[ii]);
        let result = firstValue * input[ii];
        return result;
      };
    };
  };
};

function solveForThree(input, check) {
  for (i = 0; i < input.length; i++) {
    let firstValue = input[i];
    for (ii = 0; ii < input.length; ii++) {
      let firstPair = firstValue + input[ii];
      for (iii = 0; iii < input.length; iii++) {
        let sum = firstPair + input[iii];
        if (sum == check) {
          // console.log(input[i], input[ii], input[iii]);
          let result = input[i] * input[ii] * input[iii];
          return result;
        };
      };
    };
  };
};

// Run node index.js to calculate the answer.