function isOdd(num) {
    if (num < 0) {
        num = - num;
    }
    while (num >= 0) {
        if (num === 0) {
            return false;
        } else if (num === 1) {
            return true;
        }
        num = num -2;
    }
}

console.log(isOdd(17));
console.log(isOdd(-8));