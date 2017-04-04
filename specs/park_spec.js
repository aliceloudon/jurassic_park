var assert = require('assert')
var Park = require('../park.js')

describe ('Park', function() {

  var park

  beforeEach(function() {
    park = new Park()
  })

  it ('should have an empty enclosure at start', function() {
    assert.strictEqual(0, park.enclosure.length)
  })

  // it ('should have a number of offspring', function() {
  //   assert.strictEqual(2, dinosaur.offspring)
  // })

})