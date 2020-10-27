class Planet {
  constructor(object) {
    this.name = object.name;
    this.shop = object.shop;
    this.currentShip = null;
    this.coordinates = object.coordinates;

  }

  landShip(ship) {
    this.currentShip = ship
  }

  calculateDistance(planet) {
    return Math.sqrt(Math.pow(planet.coordinates.x, 2) + Math.pow(planet.coordinates.y, 2) + Math.pow(planet.coordinates.z, 2))
  }

  refuel(ship) {
    ship.fuel = ship.fuelCapacity
  }

  giveClearance(otherPlanet) {
    var fuelRequired = this.calculateDistance(otherPlanet)
    if(Object.keys(this.currentShip.parts).length !== 5) {
      return 'Clearance denied: Cannot fly without all parts'
    } else if(this.currentShip.fuel === 0) {
      return 'Clearance denied: Cannot fly without fuel'
    } else if(this.currentShip.fuel < fuelRequired) {
      return `Clearance denied: Need at least ${Math.ceil(fuelRequired)} units of fuel to reach ${otherPlanet.name}`
    }
  }
}

module.exports = Planet