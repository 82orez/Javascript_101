function removeElement(arr, discarder) {
    // TODO: 여기에 코드를 작성합니다.
    return arr.filter((value, index, array) => {
        return value !== discarder;
    })
}


let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]