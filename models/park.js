const Park = function (name, ticketp) {
  this.name = name;
  this.ticketp = ticketp;
  this.collection = []
}

Park.prototype.addToCollection = function(dinosaur) {
  this.collection.push(dinosaur)
}

Park.prototype.removeFromCollection = function(dinosaur) {
  let index = this.collection.indexOf(dinosaur);
  this.collection.splice(index,1)
}

// Park.prototype.mostPopularDino = function() {
//   result = Math.max.apply(Math, array.map(function(o) { return o.guestsAttractedPerDay; }));
//   return result;
// }

Park.prototype.findBySpecies = function(species) {
  let foundDinosaur = [];
  for (let dinosaur of this.collection) {
    if(dinosaur.species === species) {
      foundDinosaur.push(dinosaur)
    }
  }
  return foundDinosaur
}

Park.prototype.removeBySpecies = function(species) {
  let dinosToKeep = [];
  for (let dinosaur of this.collection) {
    if (dinosaur.species === species) continue;
    dinosToKeep.push(dinosaur)
  }
  this.collection = dinosToKeep
}

Park.prototype.visitsPerDay = function() {
  let total = 0;
  for (let dinosaur of this.collection) {
    total += dinosaur.guestsAttractedPerDay;
  }
  return total;
}

Park.prototype.visitsPerYear = function() {
  let total = 0;
  for (let dinosaur of this.collection) {
    total += dinosaur.guestsAttractedPerDay;
  }
  return total * 365;
}

Park.prototype.revenuePerYear = function() {
  let total = 0;
  for (let dinosaur of this.collection) {
    total += dinosaur.guestsAttractedPerDay;
  }
  return total * 365 * this.ticketp;
}

module.exports = Park;
