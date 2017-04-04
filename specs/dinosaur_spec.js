var assert = require('assert')
var Dinosaur = require('../dinosaur.js')

describe ('Dinosaur', function() {

  var dinosaur

  beforeEach(function() {
    dinosaur = new Dinosaur('Tyrannosaurus', 2)
  })

  it ('should have a type', function() {
    assert.strictEqual('Tyrannosaurus', dinosaur.type)
  })

})