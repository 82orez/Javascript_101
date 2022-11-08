console.log(1+'1');
console.log(typeof (1 +'1'));

console.log(1 + true);
console.log(typeof (1 + true));

console.log('1' + true);
console.log(typeof ('1' + true));

let foo = 1;

{
    // foo ++;
    let foo = 2;
    console.log(foo);
}

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