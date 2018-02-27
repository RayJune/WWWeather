const request = require('request');

const parsedArgv = require('./utlis/getParsedArgv.js');

const encodedAddress = encodeURIComponent(parsedArgv.address);

request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
  json: true
}, (error, response, body) => {
  // console.log(JSON.stringify(response, undefined, 2));
  // console.log(JSON.stringify(body, undefined, 2));
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
  console.log(`Longitude: ${body.results[0].geometry.location.lng}`);    
});
