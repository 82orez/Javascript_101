function isFalsy(anything) {
    if (anything) {
        return false;
    }
    return true;
}

console.log(isFalsy(''));
console.log(isFalsy(NaN));
console.log(isFalsy(null));
console.log(isFalsy(undefined));
