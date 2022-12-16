// * JSON: 주로 서버 통신에서 사용되는 데이터 형식

// * 1. Object to JSON: stringify(obj)
// * JSON.stringfy 함수는 input 값을 JSON 형식으로 변환합니다.

// ! 단, undefined 와 function 은 JSON 으로 생략되거나 null 로 변환됩니다.
// ? undefined, function 이 주어졌을 경우
// ? stringifyJSON(undefined)            // undefined
// ? stringifyJSON(function(){})         // undefined
// ? stringifyJSON({ x: undefined, y: function(){} })       // '{}'

let json = JSON.stringify(true);
console.log('Bool:', json);

json = JSON.stringify(["apple", "banana"]);
console.log('array:', json);

const rabbit = {
    name: "Tori",
    color: "white",
    size: null,
    birthday: new Date(),
    jump: () => {
        console.log(`${this.name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log('object:', json);

json = JSON.stringify(rabbit, ["name", "color"]);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => value);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    return key === "name" ? "TG" : value;
});
console.log(json);


// * 2. JSON to Object: parse(json)
const obj = JSON.parse(json, (key, value)=>{
    return key ==='birthday' ? new Date(value) : value;
});
console.log('JSON to Object:', obj);

rabbit.jump();
// obj.jump();  // 에러 발생. JSON 에서 문자열로 변환될 때 함수는 제외되었기 때문.
console.log(obj.name);

console.log(rabbit.birthday.getDate());
console.log(obj.birthday.getDate());