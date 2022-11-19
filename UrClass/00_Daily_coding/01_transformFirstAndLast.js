class Counter {
    constructor() {
        this.value = 0; // 생성자 호출을 할 경우, this 는 new 키워드로 생성한 Counter 의 인스턴스입니다
    }
    increase() {
        this.value++
    }
    decrease() {
        this.value--
    }
    getValue() {
        return this.value
    }
}

let counter1 = new Counter() // 생성자 호출
counter1.increase()
console.log(counter1.getValue()); // 1