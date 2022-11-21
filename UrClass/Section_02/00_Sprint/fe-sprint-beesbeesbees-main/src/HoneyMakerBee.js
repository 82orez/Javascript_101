const Bee = require('./Bee');

class HoneyMakerBee extends Bee {
  // TODO..
    constructor() {
        super();
        this.age = 10;
        this.job = 'make honey';
        this.honeyPot = 0;
    }
    makeHoney () {
        this.honeyPot ++;
        return this.honeyPot;
    }
    giveHoney () {
        this.honeyPot--;
        return this.honeyPot;
    }
}

module.exports = HoneyMakerBee;
