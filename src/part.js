
class Part {
  constructor(object) {
    this.name = object.name;
    this.value = object.value;
    this.broken = false;
    this.validTypes = ['landing gear', 'shell', 'hyperdrive', 'computer', 'life support', 'landing gear', undefined]
    this.type = this.validTypes.includes(object.type) ? object.type : undefined;
  }

  isValid() {
    if (this.name === undefined || this.type === undefined || this.value === undefined) {
      return false;
    }
    return true;
  }
  }

module.exports = Part;
