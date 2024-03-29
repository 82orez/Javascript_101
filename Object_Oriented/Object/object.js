const book = {
  // 메서드에 관한 ES6 신규 문법
  buy() {
    console.log('I bought this book.');
    console.log(this.name);
  },
  name: 'Javascript',
  done: true,
  // this 가 가르키는 것은 finish 함수가 속한 객체 book.
  finish: function () {
    this.done === false ? console.log('Still reading') : console.log('Done');
  },
};

book.buy();
book.finish();
console.log();

// 얕은 복사(shallow copy)
const book1 = { ...book };
console.log('book1: ', book1);
console.log('book===book1: ', book === book1); // false
