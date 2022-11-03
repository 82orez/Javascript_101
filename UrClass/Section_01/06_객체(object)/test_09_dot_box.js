// 객체를 입력받아 객체가 가진 age 속성값이 합법적으로 투표할 수 있는 나이(18세 이상)인지 여부를 리턴해야 합니다.

function isPersonOldEnoughToVote(person) {
    if (person.age >= 18) {
        return true;
    }
    // person[age] 로 하면 오류 발생.
    // 이 함수에서 age 는 동적 요소(매개변수 따위)가 아니라 정적 요소(변하지 않는 상수 같은)이기 때문인 것 같음.
    // if (person[age] >= 18) {
    //     return true;
    // }
    return false;
}

let obj = {
    age: 19,
};

let output = isPersonOldEnoughToVote(obj);
console.log(output); // --> true