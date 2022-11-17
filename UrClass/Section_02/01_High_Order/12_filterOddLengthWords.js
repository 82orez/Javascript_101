function filterOddLengthWords(words) {
    // TODO: 여기에 코드를 작성합니다.
    return words.filter((value, index, array) => {
        return value.length % 2 === 1;
    })
}


let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']