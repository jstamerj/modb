modc = require('modc')();

module.exports = function() {
  modcA = modc();
  return {
    set: function(newValue) {
      modcA.set(newValue);
    },
    get: function() {
      return modcA.get();
    }
  };
};
