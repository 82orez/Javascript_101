function makePermutations(str) {
    let result = ''

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            result += `${str[i]}${str[j]},`;
        }
    }
    return result.slice(0,(result.length-1));
}

console.log(makePermutations('ab'));