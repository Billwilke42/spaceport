
class Part {
  constructor(object) {
    this.name = object.name;
    this.value = object.value;
    this.broken = false;
    this.validTypes = ['landing gear', 'shell', 'hyperdrive', 'computer', 'life support', 'landing gear', undefined];
    if(this.validTypes.includes(object.type)) {
      this.type = object.type;
    }
    else {
      this.type = undefined;
    }
  }

  isValid() {
    if (!this.name || !this.type || !this.value) {
      return false;
    }
    return true;
  }
  }

module.exports = Part;
