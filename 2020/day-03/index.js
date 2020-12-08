const getData = require('../../auth/index');
const url = 'https://adventofcode.com/2020/day/3/input';

const array = []; 

const run = async () => {
  const input = await getData(url);

  let str = '';
  for (i = 0; i < input.length; i++) {
    let index = input.charAt(i);
    if (index.match(/\n/) && str !== '') {
      array.push(str.toString());
      str = '';
    } else {
      str += input.charAt(i);
    };
  };
  
  let result = await checkPath(3, 1);
  console.log(result);
};

function checkPath(right, down) {
  let trees = 0;
  let x = 0;
  let y = 0;
  let row = array[y];
  let point = row.charAt(x);
  while (y <= array.length) {
    x += right;
    y += down;
    if (point == '#') {
      trees++;
    };
  };
  return trees;
};

module.exports = run;