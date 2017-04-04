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

  it ('should have a number of offspring', function() {
    assert.strictEqual(2, dinosaur.offspring)
  })

})