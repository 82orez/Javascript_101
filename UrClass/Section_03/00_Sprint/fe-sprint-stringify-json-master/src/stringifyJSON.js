/**
 * 1. Browser 에 존재하는 JSON.stringfy 함수를 직접 구현해 봅니다.
 * JSON.stringfy 함수는 input 값을 JSON 형식으로 변환합니다.
 * 단, undefined 와 function 은 JSON 으로 생략되거나 null 로 변환됩니다.
 *
 * 2. stringfyJSON 은 아래와 같이 작동합니다.
 * - Boolean 이 input 으로 주어졌을 경우
 * stringifyJSON(true);                // 'true'
 *
 * - String 이 input 으로 주어졌을 경우
 * stringifyJSON('foo');               // '"foo"'
 *
 * - Array 가 input 으로 주어졌을 경우
 * stringifyJSON([1, 'false', false]); // '[1,"false",false]'
 *
 * - Object 가 input 으로 주어졌을 경우
 * stringifyJSON({ x: 5 });            // '{"x":5}'
 *
 * - undefined, function 이 주어졌을 경우
 * stringifyJSON(undefined)            // undefined
 * stringifyJSON(function(){})         // undefined
 * stringifyJSON({ x: undefined, y: function(){} })   // '{}'
 *
 * 3. spec/stringifyJSONSpec.js의 stringifiableObjects 배열을 참고해서 테스트에서 어떤 input 값들이
 * 주어지고, 어떻게 stringify 해 주어야 할지 생각해 보세요.
 *
 * 4. 그냥 테스트 통과를 하고 싶으시다면, 다음과 같이 구현하면 될 거예요.
 *  const stringifyJSON = JSON.stringify;
 *
 * 하지만 이 과제의 목적은 재귀를 공부하는 것이니, 처음부터 구현해봐야겠지요?:
 */
function stringifyJSON(obj) {
  // your code goes here
  // ? 인자가 참조자료형(배열, 객체)가 아니라 bool, number 이면
  if (typeof obj === 'number' || obj === null || typeof obj === 'boolean') {
    return `${obj}`;
  }

  // ? 인자가 참조자료형(배열, 객체)가 아니라 문자열이면
  if (typeof obj === 'string') {
    return `"${obj}"`;
  }

  // * 인자가 배열이면 배열을 풀어서 위와 같은 작업을 재귀적으로 수행함.
  if (Array.isArray(obj)) {
    let result = [];
    // * 배열의 각 요소를 stringifyJSON() 한 후, 새 배열에 push.
    for (let i = 0; i < obj.length; i++) {
      let el = stringifyJSON(obj[i]);
      result.push(el);
      console.log('Inner console: ', result);
    }
    // ? result 는 배열이기 때문에 `백틱` 을 사용해 문자열로 변환시켜 준 뒤 배열을 감싸준다.
    // ? 그냥 리턴하게 되면 배열 괄호가 없는 상태로 리턴된다.
    // * 한동안 검색한다고 헤맴. --> 일종의 공식
    // * 자바스크립트에서 배열이나 객체를 문자열화 하면 괄호가 없는 상태 / [object Object] 로 리턴.
    return `[${result}]`;
  }

  // * 인자가 객체이면 (배열은 위에서 처림됨.)
  // * 함수와 undefined 는 제외.
  if (typeof obj === 'object') {
    let newObj = '';
    for (let key in obj) {
      let objKey = stringifyJSON(key);
      let objValue = stringifyJSON(obj[key]);

      if (objKey === undefined || objValue === undefined || typeof objValue === 'function') {
        newObj = '';
      } else {
        newObj += `${objKey}:${objValue},`;
      }
    }
    // * 문자열의 마지막 쉼표 제거.
    return `{${newObj.slice(0, newObj.length - 1)}}`;
  }
}

// 다음 코드는 결과 제출을 위한 코드입니다. 신경 쓰지 않아도 좋습니다.
if (typeof window === 'undefined') {
  module.exports = stringifyJSON;
}

// console.log(stringifyJSON(9));
// console.log(stringifyJSON([8]));
// console.log(stringifyJSON(["hi"]));
console.log(stringifyJSON([1, [8, 'hi']]));

let empty = [];
empty.push(7);
empty.push(8);

console.log(empty);
