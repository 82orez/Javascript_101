class Human {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sleep(){ return `${this.name}이(가) 잠을 잡니다.`}
}

class Student extends Human{
    constructor(name, age, grade){
        super(name, age);
        this.grade = grade;
    }
    study(num){
        this.grade = this.grade + num;
        return `${this.name}의 성적이 ${num}만큼 올라 ${this.grade}이 되었습니다.`
    }
}

class ForeignStudent extends Student{
    constructor(name, age, grade, country){
        super(name, age, grade);
        this.country = country;
    }
    speak(){
        return `${this.country} 언어로 수업을 진행합니다.`
    }
}

let americanStudent = new ForeignStudent('jake', 23, 80, '미국');

console.log(americanStudent);
console.log(americanStudent.speak());