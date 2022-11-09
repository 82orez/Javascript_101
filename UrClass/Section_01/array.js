// -----------------Array Q1.

const emptyArr = [];

console.log(typeof emptyArr === 'array');
console.log(emptyArr.length);
console.log(typeof emptyArr.length);
// expect(typeof emptyArr === 'array').to.equal(false);
// expect(emptyArr.length).to.equal('0');

const multiTypeArr = [
    0,
    1,
    'two',
    function () {
        return 3;
    },
    { value1: 4, value2: 5 },
    [6, 7],
];
console.log(multiTypeArr.length);
console.log(multiTypeArr[0]);
console.log(multiTypeArr[2]);
console.log(multiTypeArr[3]());
console.log(multiTypeArr[4].value1);
console.log(multiTypeArr[4]['value2']);
console.log(multiTypeArr[5][1]);
// expect(multiTypeArr.length).to.equal(6);
// expect(multiTypeArr[0]).to.equal(0);
// expect(multiTypeArr[2]).to.equal('two');
// expect(multiTypeArr[3]()).to.equal(3);
// expect(multiTypeArr[4].value1).to.equal({ value1: 4, value2: 5 });
// expect(multiTypeArr[FILL_ME_IN][FILL_ME_IN]).to.equal(5);
// expect(multiTypeArr[FILL_ME_IN][FILL_ME_IN]).to.equal(7);

//-----------------Array Q3.
const arr = ['peanut', 'butter', 'and', 'jelly'];

console.log(arr.slice(2, 2));
console.log(arr.slice(3, 0));
console.log(arr.slice(5, 1));

// expect(arr.slice(1)).to.deep.equal(['butter', 'and', 'jelly']);
// expect(arr.slice(0, 1)).to.deep.equal(['peanut']);
// expect(arr.slice(0, 2)).to.deep.equal(['peanut', 'butter']);
// expect(arr.slice(2, 2)).to.deep.equal(FILL_ME_IN);
// expect(arr.slice(2, 20)).to.deep.equal(FILL_ME_IN);
// expect(arr.slice(3, 0)).to.deep.equal(FILL_ME_IN);
// expect(arr.slice(3, 100)).to.deep.equal(FILL_ME_IN);
// expect(arr.slice(5, 1)).to.deep.equal(FILL_ME_IN);
let sliceArr = arr.slice();
// 서로 다른 주소값을 가짐.
console.log(arr === sliceArr);

//-----------------------Array Q4.
const arr1 = ['zero', 'one', 'two', 'three', 'four', 'five'];

// 함수의 전달인자로 arr1 전달한 후 변경.
function passedByReference(refarr1) {
    refarr1[1] = 'changed in function';
}
passedByReference(arr1);
console.log(arr1[1]);
// expect(arr1[1]).to.equal('one');

// arr1 자체를 변경.
const assignedarr1 = arr1;
assignedarr1[5] = 'changed in assignedarr1';
console.log(arr1[5]);
// expect(arr1[5]).to.equal('changed in assignedarr1');

const copiedarr1 = arr1.slice();
copiedarr1[3] = 'changed in copiedarr1';
// expect(arr1[3]).to.equal('three');

//------------------Array Q5.
const arr2 = [1, 2];

arr2.unshift(3);
console.log(arr2.unshift());
// expect(arr2).to.deep.equal([3, 1, 2]);

const shiftedValue = arr2.shift();
console.log(shiftedValue);
// expect(shiftedValue).to.deep.equal(FILL_ME_IN);
// expect(arr2).to.deep.equal([1, 2]);
