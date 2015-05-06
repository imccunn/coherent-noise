'use strict';

module.exports = {
  rand: function(min, max){
    return Math.random() * (max - min) + min;
  },
  rInt: function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
};


