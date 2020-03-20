var validTypes = [
  'shell',
  'hyperdrive',
  'computer',
  'life support',
  'landing gear',
  undefined
]

class Part {
  constructor(object) {
    this.name = object.name ;
    this.type = validTypes.includes(object.type) ? object.type : undefined;
    this.value = object.value;
    this.broken = false;
  }

  isValid() {
    if (this.name === undefined || this.type === undefined || this.value === undefined) {
      return false;
    }
    return true;
  }
  }

module.exports = Part;
