function replaceAll(str, from, to) {
    // 조건을 만족하는 새로운 문자열을 만들기 위해 먼저 빈 문자열을 만든다.
    let result = '';

    for (const strElement of str) {
        if (strElement !== from) {
            result += strElement;
        } else {
            result += to;
        }
    }
    return result;
}

console.log(replaceAll('loop', 'o', 'e'));