var Being = require('../src/being');
var Part = require('../src/part')

class Ship {
  constructor(object) {
    this.name = object.name;
    this.type = object.type;
    this.captain = object.captain;
    this.crew = [];
    this.odometer = object.odometer || 0
    this.fuelCapacity = object.fuelCapacity || 10;
    this.cargo = [];
    this.parts = object.parts || {};
    this.maxCrew = object.maxCrew;
    this.fuel = 0;
    this.validDesignation = ['military', 'passenger', 'cargo'];
    if(!this.validDesignation.includes(object.type)) {
      return this.type = undefined;
    }}


    addCrew(crew) {
      return crew.forEach(member => {
        if(this.crew.length < this.maxCrew && member instanceof Being) {
          this.crew.push(member)
        }
      })
      
  }

  loadCargo(cargo) {
    if(cargo instanceof Part) {
      this.cargo.push(cargo)
    }
  }

  updatePart(part) {
    if(this.parts[part.type]) {
      var difference = this.parts[part.type].value - part.value
      this.parts[part.type] = part
      return difference
    } else if(part.type !== undefined) {
      this.parts[part.type] = part
    }
  }

  checkReadiness() {
    var status = {
      readyToFly: null,
      notes: null
    }
    
    if(this.captain && this.fuel && Object.keys(this.parts).length === 5) {
      status.readyToFly = true
      status.notes = 'Good to go!'
    } else if (!this.captain || !this.fuel || Object.keys(this.parts).length < 5){
      status.readyToFly = false
      if(!this.captain) {
        status.notes = 'Cannot fly without a captain'
      } else if(!this.fuel && this.captain){
       status.notes = 'Cannot fly without fuel'
      } else {
        status.notes = 'Cannot fly without all parts'
      }
    }
    
    return status
  }
}

module.exports = Ship;
