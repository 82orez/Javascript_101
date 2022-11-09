console.log(1 +'1');
console.log(typeof (1 +'1'));

console.log(1 + true);
console.log(typeof (1 + true));

console.log('1' + true);
console.log(typeof ('1' + true));

// --------------
// 변수 호이스팅
let foo = 1;

{
    foo ++; // -> 실행결과 오류. 해당 블록 단위에서 변수 호이스팅이 먼저 일어나게 됨.
    // let foo = 2;
    console.log(foo);
}
// ------------

let funcExpressed = 'to be a function';

console.log(typeof funcExpressed);
console.log(typeof funcDeclared);

function funcDeclared() {
    return 'this is a function declaration';
}

funcExpressed = function () {
    return 'this is a function expression';
};

console.log(typeof funcExpressed);


// ----------------------------
function defaultParameter(num = 5) {
    return num;
}

console.log(defaultParameter());
console.log(defaultParameter(10));


// ------------------------------
let age = 27;
let name = 'jin';
let height = 179;

function outerFn() {
    let age = 24;
    name = 'jimin';
    let height = 178;

    function innerFn() {
        age = 26;
        let name = 'suga';
        return height;
    }

    innerFn();

    console.log(age);
    console.log(name);
    // expect(age).to.equal(26);
    // expect(name).to.equal('suga');

    return innerFn;
}

const innerFn = outerFn();

console.log(age);
console.log(name);
console.log(innerFn());


// expect(age).to.equal(27);
// expect(name).to.equal('jimin');
// expect(innerFn()).to.equal(178);

// ----------------
let overTwenty = true;
let allowedToDrink = overTwenty;

overTwenty = false;

console.log(overTwenty);
console.log(allowedToDrink);
// expect(overTwenty).to.equal(false);
// expect(allowedToDrink).to.equal(false);

let variable = 'variable';
let variableCopy = 'variableCopy';
variableCopy = variable;
variable = variableCopy;

console.log(variable);
// expect(variable).to.equal('variable');


// ----------
let currentYear = 2020;

function afterTenYears(year) {
    year = year + 10;
    // return year;
}

// 함수의 실행의 리턴값과 비교
afterTenYears(currentYear);
// console.log(afterTenYears(currentYear));
console.log(currentYear);
// expect(currentYear).to.equal(2020);

function afterTenYears2(currentYear) {
    currentYear = currentYear + 10;
    return currentYear;
}
let after10 = afterTenYears2(currentYear);

console.log(currentYear);
console.log(after10);
// expect(currentYear).to.equal(2030);
// expect(after10).to.equal(2030);


