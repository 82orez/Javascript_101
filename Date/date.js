// Date 의 인자가 없으면 UTC 기준으로 현재 날짜와 시간 표시하고, ms 단위의 숫자를 넣으면 해당 시간 이후의 date 를 표시.
// UTC+0: 시간의 시작을 1970년 1월 1일 0시 0분 0초로 함.
// Date 내장 객체의 인스턴스를 생성.
const date = new Date(1583507183000);
console.log(date);

// 문자로 특정 날짜 전달하기.
// getTime 메서드를 사용하면 기준시로부터 지나 온 시간을 알 수 있음.
const date1 = new Date('1977-4-10/00:00:00');
console.log(date1);
console.log(date1.toString());
console.log(date1.toLocaleString());
console.log(date1.toLocaleDateString());
console.log(date1.getTime());