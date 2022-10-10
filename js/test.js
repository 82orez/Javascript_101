function doSomething(add) {
   console.log(add);
   console.log(add(3,4));
}

function add(a, b) {
  return a + b;
}

doSomething(add);