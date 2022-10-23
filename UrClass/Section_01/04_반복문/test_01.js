// function findTheBug(word) {
//     let outPut = word.indexOf('#');
//     return outPut;
// }

function findTheBug(word) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] === '#') {
            return i;
            break;
        }
    }
}
console.log(findTheBug('wo#rd#2'));
console.log(findTheBug('word2'));

