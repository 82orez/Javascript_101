let MyMath = {
    PI: Math.PI,
    random: function() {
        return Math.random();
    },
    floor: function(num) {
        return Math.floor(num);
    },
}

console.log(MyMath.PI);
console.log(MyMath.floor(3.14));
console.log(MyMath.random());