var Being = require('../src/being');
class Ship {
  constructor(object) {
    this.name = object.name;
    this.type = object.type;
    this.captain = object.captain;
    this.crew = [];
    this.odometer = object.odometer || 0
    this.fuelCapacity = object.fuelCapacity || 10;
    this.cargo = [];
    this.parts = {};
    this.maxCrew = object.maxCrew;
    this.fuel = 0;
    this.validDesignation = ['military', 'passenger', 'cargo'];
    if(!this.validDesignation.includes(object.type)) {
      return this.type = undefined;
    }}
    addCrew(crew) {
  for (var i = 0; i < this.maxCrew; i++) {
if (this.crew.length === this.maxCrew) {
      return this.crew ;
 } else {
    this.crew = this.crew.concat(crew[i])
}}}}

module.exports = Ship;
