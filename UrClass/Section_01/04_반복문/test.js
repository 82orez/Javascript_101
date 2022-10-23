function repeatString(str, num) {
    let srtSum = '';

    for (let i = 0; i < num; i++) {
        srtSum += str;
    }

    return srtSum;
}

console.log(repeatString('code', 3));
console.log(repeatString('code', 0));