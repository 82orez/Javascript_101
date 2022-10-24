function getMaxNumberFromString(str) {
    let max = 0;

    for (const strElement of str) {
        if (parseInt(strElement) > max) {
            max = parseInt(strElement);
        }
    }
    return max.toString();
}

console.log(getMaxNumberFromString('53862'));
console.log(getMaxNumberFromString(''));
console.log(typeof getMaxNumberFromString(''));