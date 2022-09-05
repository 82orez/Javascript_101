let memberArray = ['egoing', 'graphittie', 'leezche'];

for (const string of memberArray) {
    console.log(string);
}

for (let i = 0; i < memberArray.length; i++) {
    console.log(memberArray[i]);
}

let memberObject = {
    manager:'egoing',
    developer:'graphittie',
    designer:'leezche'
}

for (const memberObjectKey in memberObject) {
    console.log(`${memberObjectKey} is ${memberObject[memberObjectKey]}!`);
}