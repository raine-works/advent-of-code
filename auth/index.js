const axios = require('axios'); 
require('dotenv').config({ path: '.env' }); 

const getData = async (url) => {
  let result;
  await axios.get(url, {
    headers: {
      "Cookie": process.env.TOKEN
    }
  })
  .then(function(response) {
    //console.log(response.data);
    result = response.data;
  })
  .catch(function(error) {
    console.log(error);
  });
  return result;
};

module.exports = getData;