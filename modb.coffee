modc = require('modc')

module.exports.get = ->
  return modc.get()

module.exports.set = (newValue) ->
  modc.set(newValue)
