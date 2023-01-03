function power(base, exponent) {
  // todo: 여기에 코드를 작성합니다.
  let num = 1;

  if (exponent === 0) {
    return 1;
  }
  //
  // return base * power(base, exponent - 1);

  for (let i = 0; i < exponent; i++) {
    num = num * base;
  }
  return num % 94906249;
}

let output = power(3, 40);
console.log(output); // --> 19334827

console.log(power(2, 0));
console.log(power(2, 3));
console.log(power(3, 3));
console.log(power(5, 22));
