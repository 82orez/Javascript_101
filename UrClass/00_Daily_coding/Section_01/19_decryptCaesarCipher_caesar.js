// * 암호화된 문자열과 암호화 키를 입력받아 복호화된 문자열을 리턴해야 합니다.
// * 카이사르 암호(Caesar cipher)는 평문(plaintext)을 암호키 secret 개만큼 (오른쪽으로) 평행이동시켜 암호화 합니다.
// * 복호화는 암호화된 문자열을 원래의 평문으로 복원하는 것을 말합니다.

// * 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
// * 공백은 그대로 두어야 합니다.

// ? 'hello' 를 secret 3으로 암호화한 경우: 'khoor'
// ? 'codestates' 를 secret 11로 암호화한 경우: 'nzopdelepd'

function decryptCaesarCipher(str, secret) {
    // TODO: 여기에 코드를 작성합니다.
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';

    if (str.length === 0) {
        return '';
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            result += ' ';
        } else if (alphabet.indexOf(str[i]) - secret >= 0) {
            result += alphabet[alphabet.indexOf(str[i]) - secret];
        } else {
            result += alphabet[alphabet.indexOf(str[i]) - secret + 26];
        }
    }
    return result;
}

let output = decryptCaesarCipher('khoor', 3);
console.log(output); // --> hello

output = decryptCaesarCipher('zruog', 3);
console.log(output); // --> world

console.log(decryptCaesarCipher(''));
console.log(decryptCaesarCipher('d', 4));

console.log(decryptCaesarCipher('khoor zruog', 3));
console.log(decryptCaesarCipher('nzop delepd dfaazced jzf', 11));

console.log('abcdefghijklmnopqrstuvwxyz'.length);
console.log('abcdefghijklmnopqrstuvwxyz'[0]);
