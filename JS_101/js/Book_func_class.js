// 과거 함수(function)를 이용한 102_class 선언 형태 -> EM6 이후 102_class 적용됨.
// 네이밍이 일반 함수의 카멜 표기법과 달리 대문자로 시작.
function Book(title, author, volume, price) {
    this.title = title;
    this.author = author;
    // this.volume = volume;
    this.price = price;

    this.printPrice = function () {
        document.write(`이 책 '${this.title}'의 가격은 ${this.price}원 입니다.`);
    }
}


let html = new Book("웹표준의 정석", "고승원", "608", 25000);
let youtube = new Book("유튜브 영상 만들기", "김씨", 368, "16000");
let python = new Book("점프 투 파이썬", "박씨", "352", "18000");

let bookList = [html, youtube, python];

document.write("<h1>책 제목으로 살펴보기</h1>")
for (let i=0; i < bookList.length; i++) {
    document.write(`<p>${bookList[i].title}</p>`);
}
document.write('<br>');

document.write(python.price);     // 속성 출력.
document.write('<br>');

html.printPrice();     // 함수 실행.
document.write('<br>');

youtube.printPrice();     // 함수 실행.
document.write('<br>');

python.printPrice();     // 함수 실행.
document.write('<br>');

