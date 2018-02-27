const yargs = require('yargs');

const parsedArgv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      description: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

console.log(argv);

module.exports = parsedArgv;