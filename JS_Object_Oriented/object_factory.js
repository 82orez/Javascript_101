let kim = {
    name: 'kim',
    first: 10,
    second: 20,
<<<<<<< HEAD:JS_Object_Oriented/object_factory.js
    sum: function () {
        return `${this.name}'s total score is ${this.first + this.second}!`;
    },
};
=======
    sum: function() {
        return `${this.name}'s total score is ${this.first + this.second}!`;
    }
}
>>>>>>> e73aebdbd290837a6ee75c3f8a1de0bc415620d4:JS_Object/object_factory.js

let lee = {
    name: 'lee',
    first: 10,
    second: 30,
<<<<<<< HEAD:JS_Object_Oriented/object_factory.js
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
=======
    sum: function() {
>>>>>>> e73aebdbd290837a6ee75c3f8a1de0bc415620d4:JS_Object/object_factory.js
        return `${this.name}'s total score is ${this.first + this.second}!`;
    }
}

<<<<<<< HEAD:JS_Object_Oriented/object_factory.js
// console.log(Person());
console.log(new Person());

let steve = new Person('Steve', 95, 80);
let mary = new Person('Mary', 82.5, 60);

console.log(steve);
console.log(steve.sum());

console.log(mary);
console.log(mary.sum());
=======

console.log(kim.sum());
console.log(lee.sum());
>>>>>>> e73aebdbd290837a6ee75c3f8a1de0bc415620d4:JS_Object/object_factory.js
