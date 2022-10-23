function findShortestOfThreeWords(word1, word2, word3) {
    let word1Length = word1.length;
    let word2Length = word2.length;
    let word3Length = word3.length;
    let minWordLength = Math.min(word1Length, word2Length, word3Length);

    if (minWordLength === word1Length) {
        return word1;
    } else if (minWordLength === word2Length) {
        return word2;
    } else {
        return word3;
    }
}

console.log(findShortestOfThreeWords('a', 'two', 'three'));
console.log(findShortestOfThreeWords('c', 'b', 'a'));
