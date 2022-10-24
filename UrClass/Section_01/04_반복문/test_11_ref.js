function countCharacter(str, letter) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}

console.log(countCharacter('I am a hacker', 'a'));