// * 일반 함수의 경우 함수 생성시 this 가 자동으로 생성된다.
// * 이 때 this 는 자신이 속한 객체(object) 를 의미한다.

function sayHello() {
    console.log(`Hello ${this}`); // * sayHello 함수는 전역(Window) 객체에 속해 있으므로 이 때 this 는 전역 객체.
}

sayHello();

const people = {
    name: 'TG',
    sayHello: function() {
        console.log(`Hello ${this.name}`)
    }
}

people.sayHello();  // * sayHello 함수는 people 객체에 속해 있으므로 이 때 this 는 people.



// ! 반면에 화살표 함수는 this 를 가지지 않는다.
// ! 다른 말로 표현하면 화살표 함수의 this 는 전역(Window) 객체이다.

const arrowPeople = {
    name: 'TG',
    sayHello: () => {
        console.log(`Hello ${this.name}`)
    }
}

arrowPeople.sayHello();

