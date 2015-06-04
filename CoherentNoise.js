'use strict';

var IntegerNoise = require('./IntegerNoise');
var lerp = require('./Lerp');

function CoherentNoise(x) {
  var intX = Math.floor(x);
  var n0 = IntegerNoise(x);
  var n1 = IntegerNoise(x + 1);
  var weight = x - Math.floor(x);
  var noise = lerp(n0, n1, weight);
  return noise;
}

