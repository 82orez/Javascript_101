// 1. spread 문법
// ** 주로 배열을 풀어서 인자로 전달하거나, 배열을 풀어서 각각의 요소로 넣을 때에 사용합니다.

function spreadSum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];
console.log('Spread', spreadSum(...numbers)); // Array -> String

console.log(Math.max(...numbers));

// 2. rest 문법
// ** 파라미터를 배열의 형태로 받아서 사용할 수 있습니다. 파라미터 개수가 가변적일 때 유용합니다.

function restMap(...theArgs) {
    return theArgs.map((value, index, array) => {
        if (value % 2 === 0) {
            return `Index ${index} 의 값 ${value} 은 짝수`;
        }
        return `Index ${index} 의 값 ${value} 은 홀수`;
    });
}


console.log('Rest', restMap(1, 2, 3));
console.log('Rest', restMap(1, 2, 3, 4));

function sum(...theArgs) {
    return theArgs.reduce((previous, current) => {
        return previous + current;
    });
}

console.log('Rest', sum(1, 2, 3));
console.log('Rest', sum(1, 2, 3, 4));

function isOdd(...theArgs) {
    return theArgs.reduce((previousValue, currentValue, currentIndex, array) => {
        previousValue.push(currentValue % 2 ? 'Odd' : 'Even');
        console.log(previousValue);
        console.log(currentValue);
        console.log(currentIndex);
        console.log(array);
        return previousValue;
    }, []);
}

console.log('Rest', isOdd(1, 2, 3));
console.log('Rest', isOdd(1, 2, 3, 4));
