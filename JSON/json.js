// * 1. Object to JSON: JSON.stringify(Obj)
// JSON.stringify() 함수는 input 값을 JSON 형식으로 변환합니다.
// ! (주의) JSON 으로 변환 가능한 자료형은 숫자, 문자열, Boolean, Array, null 입니다.
// undefined 와 function 을 JSON 으로 변환하면 생략되거나 null 로 변환됩니다.
// JSON.stringify({ x: undefined, y: function(){} })    // {}

let json = JSON.stringify(true);
console.log('Boolean to JSON:', json);
console.log();

json = JSON.stringify(["apple", "banana", 1, undefined]);
console.log('Array to JSON:', json);
console.log();

const rabbit = {
    name: 'Rabbit',
    color: 'white',
    size: null,
    age: 2,
    food: ['apple', 'carrot'],
    birthday: new Date('2023-01-01'),
    grade: undefined,
    jump: function() {
        // ! 참조: 객체의 메서들를 정의할 때는 가급적 화살표 함수를 쓰지 말 것
        // 화살표 함수에는 this 가 없기 때문.
        return `${this.name} can jump!`;
    },
};

console.log('Object: ', rabbit);
console.log(rabbit.jump());
console.log();

json = JSON.stringify(rabbit);
console.log('Object to JSON: ', json);
console.log();

// ? 객체 중에 특정 key 에 대해서만 JSON 변환.
json = JSON.stringify(rabbit, ["name", "color"]);
console.log(json);
console.log();

// ? 객체를 JSON 으로 변환할 때 특정 key 값만 원하는 값으로 변경.
json = JSON.stringify(rabbit, (key, value) => value);
console.log(json);
console.log();

json = JSON.stringify(rabbit, (key, value) => {
    return key === "name" ? "TG" : value;
});
console.log(json);
console.log();

console.log('-------------JSON to Object---------------')


// * 2. JSON to Object: JSON.parse(JSON 문자열)
// JSON 문자열을 자바스크립트 객체로 변환하는 것을 parsing 이라고 함.

let obj = JSON.parse(json);
console.log('JSON to Object: ',obj);
console.log();

// ? JSON 문자열을 객체으로 변환할 때도 특정 key 값만 원하는 값으로 변경 가능.
obj = JSON.parse(json, (key, value)=>{
    return key ==='birthday' ? new Date('1977-4-10') : value;
});
console.log('JSON to Object(birthday): ', obj);
console.log();

console.log('rabbit.birthday: ', rabbit.birthday.getDate());
console.log('obj.birthday: ', obj.birthday.getDate());
console.log();

// obj.jump();  // 에러 발생. JSON 에서 문자열로 변환될 때 함수는 제외되었기 때문.

console.log('obj.name: ', obj.name);
