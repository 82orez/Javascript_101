function compareNumberStrings(numStr1, numStr2) {
    if (parseInt(numStr1) > parseInt(numStr2)) {
        numStr1 = parseInt(numStr1) + 5;
        return numStr1.toString();
    } else {
        numStr2 = parseInt(numStr2) + 5;
        return numStr2.toString();
    }
}
console.log(compareNumberStrings('2', '123'));
console.log(typeof compareNumberStrings('123', '2'));