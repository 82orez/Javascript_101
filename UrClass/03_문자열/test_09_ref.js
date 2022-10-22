function findMinLengthOfThreeWords(word1, word2, word3) {
    let shortestLen = word1.length;

    // 첫 번 째 글자가 2번째 글자보다 길 때
    if (word1.length > word2.length) {
        shortestLen = word2.length;
        // word 2 랑 word 3을 비교
        if (word2.length > word3.length) {
            shortestLen = word3.length;
        }
    } else {
        // word1 과 word3 을 비교
        if (word1.length > word3.length) {
            shortestLen = word3.length;
        }
    }
    return shortestLen;
}
