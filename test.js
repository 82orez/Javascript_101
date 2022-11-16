
// if (true) {
//     var secret = '12345';
// }
// console.log(secret);

// console.log(secret);    // ReferenceError 가 아님. hoisting 때문.
//
// if (true) {
//     var secret = '12345';
// }

//
// function a() {
//     var secret = 123;
// }
// a();
// console.log(secret);

// function loop() {
//     for(let i = 0; i < 5; i++) {
//         console.log(i);
//     }
//     console.log('final',i);
// }
// loop();

let greeting = 'hello';
function greetSomeone() {
    let firstName = 'Josh'
    return greeting + ' ' + firstName;
}
console.log(greetSomeone());
console.log(firstName);
