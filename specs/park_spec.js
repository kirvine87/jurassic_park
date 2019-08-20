const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;

  beforeEach(function () {
    park = new Park('Jurassic', 20);
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('raptor', 'carnivore', 45);
    dinosaur3 = new Dinosaur('raptor', 'carnivore', 45);
  })

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic')
  });

  it('should have a ticket price', function() {
    const actual = park.ticketp;
    assert.strictEqual(actual, 20)
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.collection;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addToCollection(dinosaur1);
    const actual = park.collection;
    assert.deepStrictEqual(actual, [dinosaur1])
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addToCollection(dinosaur1);
    park.addToCollection(dinosaur2);
    park.removeFromCollection(dinosaur1);
    const actual = park.collection;
    assert.deepStrictEqual(actual, [dinosaur2])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addToCollection(dinosaur1);
    park.addToCollection(dinosaur2);
    const actual = park.mostPopularDino();
    assert.deepStrictEqual(actual, dinosaur1)
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    park.addToCollection(dinosaur1);
    park.addToCollection(dinosaur2);
    const actual = park.findBySpecies('raptor');
    assert.deepStrictEqual(actual, [dinosaur2])
  });

  it('should be able to remove all dinosaurs of a particular species', function() {
    park.addToCollection(dinosaur1);
    park.addToCollection(dinosaur2);
    park.addToCollection(dinosaur3);
    park.removeBySpecies('raptor')
    const actual = park.collection;
    assert.deepStrictEqual(actual, [dinosaur1])
  });

  it('should be able to calculate the total number of visitors per day', function() {
    park.addToCollection(dinosaur1);
    park.addToCollection(dinosaur2);
    const actual = park.visitsPerDay()
    assert.strictEqual(actual, 95)
  });

  it('should be able to calculate the total number of visitors per year', function() {
    park.addToCollection(dinosaur1);
    park.addToCollection(dinosaur2);
    const actual = park.visitsPerYear()
    assert.strictEqual(actual, 34675)
  });

  it('should be able to calculate the total revenue of sales per year', function() {
    park.addToCollection(dinosaur1);
    park.addToCollection(dinosaur2);
    const actual = park.revenuePerYear()
    assert.strictEqual(actual, 693500)
  });


});
