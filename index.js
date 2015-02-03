'use strict';

var greeting = require('./lib/greeting.js');

//console.log(greeting.greet('sam'));

process.argv.forEach(function(arg, index) {
  // console.log(index + ' = ' + arg);
  if (index == '2') {
    console.log(greeting.greet('sam'));
  }
});
