var Park = function() {
  this.enclosure = []
}

Park.prototype = {

  addDinosaur: function(dinosaur) {
    this.enclosure.push(dinosaur)
  },

  removeAllDinosaursOfType: function(dinosaurType) {
    for (var i = this.enclosure.length - 1; i >= 0; i--) {
      if (this.enclosure[i].type === dinosaurType) {
        this.enclosure.splice(i, 1)
      }
    }
  },

  getDinosaursWithOffspringGreaterThan2: function() {
    var found = []
    for (var i = this.enclosure.length - 1; i >= 0; i--) {
      if (this.enclosure[i].offspring > 2) {
        found.push(this.enclosure[i])
      }
    }
    return found
  }

}
  

module.exports = Park