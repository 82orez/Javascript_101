// //----------Spread Q1.
// const spread = [1, 2, 3];
// // TODO: 전개 문법을 사용해 테스트 코드를 완성합니다. spread 를 지우지 않고 해결할 수 있습니다.
// const arr = [0, ...spread, 4];
//
// console.log(arr);
// // expect(arr).to.deep.equal([0, 1, 2, 3, 4]);
// const arr3 = [1, 2, ...[3, 4]];
// console.log(arr3);


//----------Spread Q2.

const spread = [];
// TODO: 전개 문법을 사용해 테스트 코드를 완성합니다. spread 를 지우지 않고 해결할 수 있습니다.
const arr = [0, ...spread, 1];

console.log(arr);

// expect(arr).to.deep.equal([0, 1]);


//----------Spread Q2.

const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];
const concatenated = [...arr1, ...arr2];

console.log(concatenated);
// expect(concatenated).to.deep.equal([0, 1, 2, 3, 4, 5]);
// 아래 코드도 같은 동작을 수행합니다.
//  arr1.concat(arr2);


//----------Spread Q4.

const fullPre = {
    cohort: 7,
    duration: 4,
    mentor: 'hongsik',
};

const me = {
    time: '0156',
    status: 'sleepy',
    todos: ['coplit', 'koans'],
};

const fullPre1 = fullPre;
fullPre1.cohort = 10;
console.log(fullPre.cohort);

const merged = {...fullPre, ...me};
merged.cohort = 20;
console.log(fullPre.cohort);


//----------Spread Q5.

function getAllParamsByRestParameter(...args) {
    return args;
}

function getAllParamsByArgumentsObj() {
    return arguments;
}

const restParams = getAllParamsByRestParameter('first', 'second', 'third');
const argumentsObj = getAllParamsByArgumentsObj('first', 'second', 'third');

console.log(restParams);
console.log(Object.keys(argumentsObj));
console.log(Object.values(argumentsObj));
console.log(argumentsObj);

console.log(restParams === argumentsObj);
console.log(typeof restParams);
console.log(typeof argumentsObj);
console.log(Array.isArray(restParams));
console.log(Array.isArray(argumentsObj));

// expect(restParams).to.deep.equal(FILL_ME_IN);
// expect(Object.keys(argumentsObj)).to.deep.equal(FILL_ME_IN);
// expect(Object.values(argumentsObj)).to.deep.equal(FILL_ME_IN);

// expect(restParams === argumentsObj).to.deep.equal(FILL_ME_IN);
// expect(typeof restParams).to.deep.equal(FILL_ME_IN);
// expect(typeof argumentsObj).to.deep.equal(FILL_ME_IN);
// expect(Array.isArray(restParams)).to.deep.equal(FILL_ME_IN);
// expect(Array.isArray(argumentsObj)).to.deep.equal(FILL_ME_IN);

const argsArr = Array.from(argumentsObj);

console.log(Array.isArray(argsArr));
console.log(argsArr);
console.log(argsArr === restParams);

// expect(Array.isArray(argsArr)).to.deep.equal(FILL_ME_IN);
// expect(argsArr).to.deep.equal(FILL_ME_IN);
// expect(argsArr === restParams).to.deep.equal(FILL_ME_IN);


//-------------Spread Q7.

function getAllParams(required1, required2, ...args) {
    return [required1, required2, args];
}

console.log(getAllParams(123));
// expect(getAllParams(123)).to.deep.equal([123]);

function makePizza(dough, name, ...toppings) {
    const order = `You ordered ${name} pizza with ${dough} dough and ${toppings.length} extra toppings!`;
    return order;
}

console.log(makePizza('original'));
console.log(makePizza('thin', 'pepperoni'));
console.log(makePizza('napoli', 'meat', 'extra cheese', 'onion', 'bacon'));
// expect(makePizza('original')).to.equal('You ordered ');
// expect(makePizza('thin', 'pepperoni')).to.equal(FILL_ME_IN);
// expect(makePizza('napoli', 'meat', 'extra cheese', 'onion', 'bacon')).to.equal(FILL_ME_IN);