// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    console.log(fruits.toString());
    console.log(fruits.join('///'));
}


// Q2. make an array out of a string
{
    const fruits = 'apple, banana, orange';
    console.log(fruits.split(',',2));
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    console.log(array.reverse());
    // 원본 array 값 자체가 변형됨.
    console.log(array);
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    // 원본 array 값 자체가 변형됨.
    console.log(array.splice(0,2,10, 11));
    console.log(array);
    // slice
    console.log(array.slice(0,2));
}




class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90

{
    const result = students.find((value, index) => {
        return value.score === 90;
    });
    console.log(result);
}

// Q6. make an array of enrolled students
{
    const result = students.filter((value, index, array) => {
        return value.enrolled === true;
    });
    console.log('filter',result);
    // make an array which includes score is higher than 75 or less than 50
    const result1 = students.filter((value, index, array) => {
       return value.score > 75 || value.score < 50;
    });
    console.log('filter',result1);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((value, index, array) => {
        return `${value.name}'s score is ${value.score * 2}!`;
    });
    console.log('map',result);
}

// Q8. check if there is a student with the condition
{
    const result = students.some((value, index, array) => {
       return value.score > 98;
    });
    console.log(result);

    const result1 = students.every((value, index, array) => {
       return value.score > 30;
    });
    console.log(result1);
}



// console.clear();



// Q9. compute students' average score
// reduce 는 여러 배열을 가공하여 하나의 값, 문자열, 배열 등으로 나타내 준다.
{
    const result = students.reduce((previousValue, currentValue, currentIndex, array) => {
        console.log('---------------')
        console.log('previousValue', previousValue);
        console.log('currentValue', currentValue);
        return previousValue + currentValue.score;
    }, 0);  // 초기값 설정 유무에 따라 previousValue 자료형태가 변하고 있음.
    console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students
        .map(value => value.score)
        .filter(score => score > 70)
        .join();
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students.map((value, index, array) => {
       return value.score;
    }).sort((a, b) => {
        return a > b ? -1 : a < b ? 1 : 0;
    });
    console.log(result);
}