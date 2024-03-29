
var IntegerNoise = require('./IntegerNoise');
var rand = require('./Rand').rand;
var CoherentNoise = require('./CoherentNoise');

var args = process.argv;
var setOfNoise = [];
var numSet = args[2];

if (!numSet) {
  console.log('Expected number of noise values to generate as second arg.');
  return;
}

for (var i = 0; i < numSet; i++) {
  var r = rand(0, 5000);
  setOfNoise.push(CoherentNoise(r));
}

console.log(setOfNoise);
