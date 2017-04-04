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
  }

}
  

module.exports = Park