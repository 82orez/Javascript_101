let kim = {
    name: 'kim',
    first: 10,
    second: 20,
    sum: function() {
        return `${this.name}'s total score is ${this.first + this.second}!`;
    }
}

let lee = {
    name: 'lee',
    first: 10,
    second: 30,
    sum: function() {
        return `${this.name}'s total score is ${this.first + this.second}!`;
    }
}


console.log(kim.sum());
console.log(lee.sum());