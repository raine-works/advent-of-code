const axios = require('axios'); 
require('dotenv').config(); 

const getData = async (url) => {
  try {
    let res = await axios.get(url, {
      headers: {
        "Cookie": process.env.TOKEN,
      },
    });
    console.log(res.data);
  } catch (error) {
    console.log(error);
  };
};

module.exports = getData;