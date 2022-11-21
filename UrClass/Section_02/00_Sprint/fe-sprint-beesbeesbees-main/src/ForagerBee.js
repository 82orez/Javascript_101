const Bee = require('./Bee');

class ForagerBee extends Bee {
  // TODO..
    constructor() {
        super();
        this.age = 10;
        this.job = 'find pollen';
        this.canFly = true;
        this.treasureChest = [];
        // this.treasure = treasure;
    }
    forage (tre) {
        this.treasureChest.push(tre);
        return this.treasureChest;
    }
}

module.exports = ForagerBee;
