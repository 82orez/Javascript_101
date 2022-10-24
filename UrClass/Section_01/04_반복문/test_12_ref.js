function getMaxNumberFromString(str) {
    let max = 0;

    for (let i = 0; i < str.length; i++) {
        if (max < parseInt(str[i])) {
            max = parseInt(str[i]);
        }
    }
    return max.toString();
}

console.log(getMaxNumberFromString('53862'));
console.log(getMaxNumberFromString(''));
console.log(typeof getMaxNumberFromString(''));