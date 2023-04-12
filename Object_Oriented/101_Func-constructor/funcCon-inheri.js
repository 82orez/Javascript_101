function Book(title, price) {
  this.title = title;
  this.price = price;
}

Book.prototype.buy = function () {
  console.log(`I bought ${this.title} at the price of ${this.price}.`);
};

const book1 = new Book('Javascript', 10000);
book1.buy();

console.log('-----------------------------');

// * Book 을 상속 받는 Textbook 함수 생성자를 만듭니다.
function Textbook(title, price, pages) {
  // 상속 받을  함수 생성자(Book)의 프로퍼티를 재사용합니다.
  Book.call(this, title, price);
  // 새로운 프로퍼티를 추가합니다.
  this.pages = pages;

  // ! 함수 생성자에서는 메서드를 상속 받기 위해 아래와 같이 따로 처리를 해줘야 합니다.
  Object.setPrototypeOf(Textbook.prototype, Book.prototype);
}

// 새로운 메서드를 추가합니다.
Textbook.prototype.buyTextbook = function () {
  console.log(`I bought ${this.title} at the price of ${this.price}.
  And this book has ${this.pages}.`);
};

const book2 = new Textbook('Python', 12000, 123);
book2.buy();
book2.buyTextbook();
