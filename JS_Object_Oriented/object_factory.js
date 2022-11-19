let kim = {
    name: 'kim',
    first: 10,
    second: 20,
    sum: function () {
        return `${this.name}'s total score is ${this.first + this.second}!`;
    },
};

let lee = {
    name: 'lee',
    first: 10,
    second: 30,
    sum: function () {
        return `${this.name}'s total score is ${this.first + this.second}!`;
    },
};

console.log(kim.sum());
console.log(lee.sum());

// function Person(name, first, second) {
//     this.name = name;
//     this.first = first;
//     this.second = second;
//     this.sum = function() {
//         return `${this.name}'s total score is ${this.first + this.second}!`;
//     }
// }

class Person {
    constructor(name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum() {
        return `${this.name}'s total score is ${this.first + this.second}!`;
    }
}

// console.log(Person());
console.log(new Person());

let steve = new Person('Steve', 95, 80);
let mary = new Person('Mary', 82.5, 60);

console.log(steve);
console.log(steve.sum());

console.log(mary);
console.log(mary.sum());
