// * 문자열을 입력받아 순서가 뒤집힌 문자열을 리턴해야 합니다.
// * 배열은 arr.reverse 를 통해 쉽게 뒤집을 수 있습니다.

function firstReverse(str) {
    let newArr = str.split('');
    newArr.reverse();
    console.log(newArr);

    let result = ''

    for (const el of newArr) {
        result += el;
    }
        return result;

    // ! return str.split('').reverse().join(''); -> // 대체 가능.
}

let output = firstReverse('codestates');
console.log(output); // "setatsedoc"

output = firstReverse('I love codestates');
console.log(output); // "setatsedoc evol I"