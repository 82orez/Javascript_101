function countCharacter(str, letter) {
    let count = 0;
    
    for (const strElement of str) {
        if (strElement === letter) {
            count++;
        }
    }
    return count;
}

console.log(countCharacter('I am a hacker', 'a'));