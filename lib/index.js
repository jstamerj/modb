modc = require('modc')();

module.exports = function() {
  return {
    set: function(newValue) {
      modc.set(newValue);
    },
    get: function() {
      return modc.get();
    }
  };
};
