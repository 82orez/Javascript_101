const [a, b, ...rest] = [10, 20, 30, 40, 50];

// 질문: a, b, rest 는 각각 어떤 값인가요?

console.log(a);
console.log(b);
console.log(rest);

const {a1, b1, ...rest1} = {a1: 10, b1: 20, c1: 30, d1: 40};
// 질문: a, b, rest 는 각각 어떤 값인가요?

console.log(a1);
console.log(b1);
console.log(rest1);

// --------------------------------------------//

function whois({displayName: displayName, fullName: {firstName: name}}){
    console.log(displayName + " is " + name);
}

let user = {
    id: 42,
    displayName: "jdoe",
    fullName: {
        firstName: "John",
        lastName: "Doe"
    }
};

// 질문: 콘솔에서 어떻게 출력될까요?
console.log(whois(user));

