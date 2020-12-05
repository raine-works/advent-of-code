const getData = require('../index');
const url = 'https://adventofcode.com/2020/day/1/input';

const array = [];
(async () => {
  const input = await getData(url);
  for (i = 0; i < input.length; i++) {
    // if(input.charAt(i) !== ' ') {

    // }
    console.log(input.charAt(i))
  };
  //console.log(array);
})();