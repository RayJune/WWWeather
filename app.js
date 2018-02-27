const parsedArgv = require('./utlis/getParsedArgv.js');
const geocode = require('./utlis/geocode');

geocode.getAddress(parsedArgv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(JSON.stringify(results, undefined, 2));
  }
});
