var assert = require('assert')
var Park = require('../park.js')
var Dinosaur = require('../dinosaur.js')

describe ('Park', function() {

  var park

  beforeEach(function() {
    park = new Park()
    dinosaur = new Dinosaur('Tyrannosaurus', 2)
  })

  it ('should have an empty enclosure at start', function() {
    assert.strictEqual(0, park.enclosure.length)
  })

  it ('can add a dinosaur to the enclosure', function() {
    park.addDinosaur()
    assert.strictEqual(1, park.enclosure.length)
  })

})