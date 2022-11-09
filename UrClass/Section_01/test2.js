// 타입 part2 마지막 문제

const overTwenty = ['hongsik', 'minchul', 'hoyong'];
let allowedToDrink = overTwenty;

overTwenty.push('san');
console.log(allowedToDrink)
// expect(allowedToDrink).to.deep.equal(['hongsik', 'minchul', 'hoyong', 'san']);
overTwenty[1] = 'chanyoung';
console.log(allowedToDrink[1])
// expect(allowedToDrink[1]).to.deep.equal(['hongsik', 'chanyoung', 'hoyong', 'san']);
// .deep.equal 은 배열의 요소나 객체의 속성이 서로 같은지 확인하는 matcher 입니다.
// .equal 아닌 .deep.equal 을 사용하는 이유는 아래 테스트 코드를 통해 고민하시기 바랍니다.

const ages = [22, 23, 27];
allowedToDrink = ages;
console.log(allowedToDrink === ages);
console.log(allowedToDrink === [22, 23, 27]);
// expect(allowedToDrink === ages).to.equal(true);
// expect(allowedToDrink === [22, 23, 27]).to.equal(false);

const nums1 = [1, 2, 3];
const nums2 = [1, 2, 3];
console.log(nums1 === nums2);
// expect(nums1 === nums2).to.equal(false);

const person = {
    son: {
        age: 9,
    },
};

const boy = person.son;
boy.age = 20;
console.log(person.son.age);
console.log(person.son === boy);
console.log(person.son === { age: 9 });
console.log(person.son === { age: 20 });
// expect(person.son.age).to.equal(20);
// expect(person.son === boy).to.equal(true);
// expect(person.son === { age: 9 }).to.equal(false);
// expect(person.son === { age: 20 }).to.equal(true);

// ---------
// 다음 문제를 해결해 보시기 바랍니다.

const num1 = [1, 2, 3]; // [1, 2, 3]이 heap 에 저장되고, 그 주소가 변수 num1에 저장된다.
const num2 = num1; // 변수 num1에 저장된 주소가 변수 num2에 저장된다.

// 두 변수 num1, num2는 같은 주소를 저장하고 있습니다. 아래 결과는 어떻게 될까요?

console.log(num1 === num2);
// expect(num1 === num2).to.equal(FILL_ME_IN);