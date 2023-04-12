class Book {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  buy() {
    console.log(`I bought ${this.title} at the price of ${this.price}.`);
  }
}

const book1 = new Book('Java', 20000);
book1.buy();

console.log('-----------------------------');

// * Book 을 상속 받는 Textbook class 생성자를 만듭니다.

class Textbook extends Book {
  // Textbook 클래스는 인스턴스 생성시 프로퍼티 3개(title, price, pages)를 생성하는데,
  // 그중 2개(title, price)를 Book 클래스에서 상속 받아 온다.
  constructor(title, price, pages) {
    super(title, price);
    this.pages = pages;
  }
}

// 새로운 메서드를 추가합니다.
Textbook.prototype.buyTextbook = function () {
  console.log(`I bought ${this.title} at the price of ${this.price}.
  And this book has ${this.pages}.`);
};

const book2 = new Textbook('html',23000,234);
console.log(book2.title)
book2.buy();
book2.buyTextbook();