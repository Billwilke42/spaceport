var Part = require('./part')

class Shop {
  constructor(object) {
    this.name = object.name;
    this.inventory = {}
  }

  addInventory(item) {
    if(item instanceof Part) {
      this.inventory[item.type] = item
    }
  }

  outfitShip(ship, purchase) {
    if(!ship.captain) {
      return 'cannot outfit a ship without a captian'
    }
    if(this.inventory[purchase]) {
      if(this.inventory[purchase].value > ship.captain.credits) {
        return `you require ${parseInt(this.inventory[purchase].value - ship.captain.credits)} more credits to make this purchase`
      } else {
        ship.captain.credits = ship.captain.credits - this.inventory[purchase].value
        ship.parts[purchase] = this.inventory[purchase]
        this.inventory[purchase] = undefined;
        return `${purchase} added to ship`
      }
    }
  }
}

module.exports = Shop;
