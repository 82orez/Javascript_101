function findShortestOfThreeWords(word1, word2, word3) {
    // 첫번째 단어가 가장 짧은 단어라고 가정.
    let shortestWord = word1;

    // 첫번째 단어가 두번째 단어보다 길 때.
    if (word1.length > word2.length) {
        shortestWord = word2;
        if (word2.length > word3.length) {
            shortestWord = word3;
        }
    }
    // 첫번째 글자가 두번째 글자보다 길지 않을 때 세번제 단어와 비교.
    if (word1.length > word3.length) {
        shortestWord = word3;
    }
    return shortestWord;
}

console.log(findShortestOfThreeWords('a', 'two', 'three'));
console.log(findShortestOfThreeWords('c', 'b', 'a'));
