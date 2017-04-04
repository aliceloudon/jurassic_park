var assert = require('assert')
var Park = require('../park.js')
var Dinosaur = require('../dinosaur.js')

describe ('Park', function() {

  var park

  beforeEach(function() {
    park = new Park()
    dinosaur = new Dinosaur('Tyrannosaurus', 1)
    dinosaur2 = new Dinosaur('Tyrannosaurus', 1)
    dinosaur3 = new Dinosaur('Velociraptor', 5)
    dinosaur4 = new Dinosaur('Triceratops', 7)
  })

  it ('should have an empty enclosure at start', function() {
    assert.strictEqual(0, park.enclosure.length)
  })

  it ('can add a dinosaur to the enclosure', function() {
    park.addDinosaur(dinosaur)
    assert.strictEqual(1, park.enclosure.length)
  })

  it ('can remove all dinosaurs of a particular type', function() {
    park.addDinosaur(dinosaur)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    park.removeAllDinosaursOfType('Tyrannosaurus')
    assert.strictEqual(1, park.enclosure.length)
  })

  it ('can get all the dinosaurs with an average offspring count of more than 2', function() {
    park.addDinosaur(dinosaur)
    park.addDinosaur(dinosaur3)
    park.addDinosaur(dinosaur4)
    assert.strictEqual(2, park.getDinosaursWithOffspringGreaterThan2().length)
  })

})