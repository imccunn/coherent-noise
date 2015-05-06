'use stict';

function IntegerNoise(n) {
  n = (n >> 13) ^ n;
  var nn = (n * (n * n * 60493 + 19990303) + 1376312589) & 0x7fffffff;
  return 1.0 - (nn / 1073741824.0);
}

module.exports = IntegerNoise;

