function studentReports(students) {
    // TODO: 여기에 코드를 작성합니다.
    let outMale = students.filter(value => {
        return value.gender === 'female';
    })
    console.log(outMale);

    return outMale.map(value => {
        let totalScore = value.grades.reduce((preV, currentV) => {
            return preV + currentV;
        })
        let aver = totalScore / value.grades.length;

        value.grades = aver;
        return value;
        // return {
        //     'name': value.name,
        //     'gender': value.gender,
        //     'grades': aver,
        // };
    })
}

let studentList = [
    {
        name: 'Anna',
        gender: 'female',
        grades: [4.5, 3.5, 4],
    },
    {
        name: 'Dennis',
        gender: 'male',
        country: 'Germany',
        grades: [5, 1.5, 4],
    },
    {
        name: 'Martha',
        gender: 'female',
        grades: [5, 4, 4, 3],
    },
    {
        name: 'Brock',
        gender: 'male',
        grades: [4, 3, 2],
    },
];

let output = studentReports(studentList);

console.log(output); // -->
// [
//     { name: 'Anna', gender: 'female', grades: 4 },
//     { name: 'Martha', gender: 'female', grades: 4 },
// ];