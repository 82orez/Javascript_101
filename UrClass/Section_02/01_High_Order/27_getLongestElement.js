function getLongestElement(arr) {
    // TODO: 여기에 코드를 작성합니다.
    return arr.reduce((acc, cur) => {
        if (acc.length < cur.length) {
            return cur;
        }
        return acc
    }, '')
}


let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'

output = getLongestElement(['one', 'two', 'wow']);
console.log(output); // --> 'one'









// function getLongestElement(arr) {
//     // TODO: 여기에 코드를 작성합니다.
//     return arr.reduce((preV, currentV)=> {
//         if (preV.length < currentV.length) {
//             return currentV;
//         }
//         return preV;
//     }, '')
// }