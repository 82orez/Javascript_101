// 임의의 변수를 전달 받아 그 자료형(type)을 반환.
// null 과 array 는 따로 구분.

function getType(anything) {
    if (anything === null) {
        return 'null';
    } else if (Array.isArray(anything)) {
        return 'array';
    } else {
        return typeof anything;
    }
}

console.log(getType('hello'));
console.log(getType(10));
console.log(getType({ name: 'Steve' }));
console.log(getType([100, 200, 300]));
