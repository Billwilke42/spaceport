class Being {
  constructor(name, species, credits) {
    this.name = name;
    this.species = species;
    this.credits = 0;
    this.isAlive = true;
    }

  updateCredits(credits) {
    this.credits = (this.credits + credits || this.credits - credits);
    return credits;
  }
  
}

module.exports = Being;
