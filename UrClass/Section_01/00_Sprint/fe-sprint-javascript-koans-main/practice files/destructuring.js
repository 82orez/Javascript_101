//--------Destructuring Q1.

const array = ['code', 'states', 'im', 'course']

const [first, second] = array

console.log(first);
console.log(second);

// expect(first).to.eql('code')
// expect(second).to.eql('states')

const result = []
function foo([first, second]) {
    result.push(second)
    result.push(first)
}

foo(array)

console.log(result)
// expect(result).to.eql(['states', 'code'])


//--------Destructuring Q2.
const array1 = ['code', 'states', 'im', 'course']
const [start, ...rest] = array1

console.log(start);
console.log(rest);
// expect(start).to.eql('code')
// expect(rest).to.eql(['states', 'im', 'course'])


// //--------Destructuring Q3.
// const name = '김코딩'
// const age = 28
//
// const person = {
//     name,
//     age,
//     level: 'Junior',
// }
//
// console.log(person)
// // expect(person).to.eql(FILL_ME_IN)


//--------Destructuring Q4.
const student = { name: '박해커', major: '물리학과' }

const { name } = student

console.log(name);
// expect(name).to.eql('박해커')


//--------Destructuring Q5 #1.
const student1 = { name1: '최초보', major: '물리학과' }
const { name1, ...args } = student1

console.log(name1);
console.log(args);

// expect(name1).to.eql('최초보')
// expect(args).to.eql(FILL_ME_IN)


//--------Destructuring Q5 #2.
const student2 = { name: '최초보', major: '물리학과', lesson: '양자역학', grade: 'B+' }

function getSummary({ name, lesson: course, grade }) {
    return `${name}님은 ${grade}의 성적으로 ${course}을 수강했습니다`
}

console.log(getSummary(student2));


//--------Destructuring Q5 #3.

const user = {
    name: '김코딩',
    company: {
        name: 'Code States',
        department: 'Development',
        role: {
            name: 'Software Engineer'
        }
    },
    age: 35
}

const changedUser = {
    ...user,
    name: '박해커',
    age: 20
}

const overwriteChanges = {
    name: '박해커',
    age: 20,
    ...user
}

const changedDepartment = {
    ...user,
    company: {
        ...user.company,
        department: 'Marketing'
    }
}

console.log(user);
console.log(changedUser);
console.log(overwriteChanges);
console.log(changedDepartment);
