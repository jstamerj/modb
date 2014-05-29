modc = require('modc');

module.exports.set = function(newValue) {
  modc.set(newValue);
}

module.exports.get = function() {
  return modc.get();
}
