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