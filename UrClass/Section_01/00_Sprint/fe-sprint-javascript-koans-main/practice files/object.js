//--------------Object Q1.

const emptyObj = {};
console.log(emptyObj.length);
// expect(typeof emptyObj === 'object').to.equal(true);
// expect(emptyObj.length).to.equal(FILL_ME_IN);


//--------------Object Q3.
const currentYear = new Date().getFullYear();
const megalomaniac = {
    mastermind: 'James Wood',
    henchman: 'Adam West',
    birthYear: 1970,
    calculateAge: function (currentYear) {
        return currentYear - this.birthYear;
    },
    changeBirthYear: function (newYear) {
        this.birthYear = newYear;
    },
};

console.log(currentYear);
console.log(megalomaniac.calculateAge(currentYear));
// expect(currentYear).to.equal(FILL_ME_IN);
// expect(megalomaniac.calculateAge(currentYear)).to.equal(FILL_ME_IN);

megalomaniac.birthYear = 2000;
console.log(megalomaniac.calculateAge(currentYear));
// expect(megalomaniac.calculateAge(currentYear)).to.equal(FILL_ME_IN);

megalomaniac.changeBirthYear(2010);
console.log(megalomaniac.calculateAge(currentYear));
// expect(megalomaniac.calculateAge(currentYear)).to.equal(FILL_ME_IN);


//--------------Object Q4.
const megalomaniac1 = {
    mastermind: 'Brain',
    henchman: 'Pinky',
    getFusion: function () {
        return this.henchman + this.mastermind;
    },
    battleCry(numOfBrains) {
        return `They are ${this.henchman} and the` + ` ${this.mastermind}`.repeat(numOfBrains);
    },
};

console.log(megalomaniac1.battleCry(3));
// expect(megalomaniac1.getFusion()).to.deep.equal('PinkyBrain');
// expect(megalomaniac1.battleCry(3)).to.deep.equal(FILL_ME_IN);


//---------------------Object Q5.
const obj = {
    mastermind: 'Joker',
    henchwoman: 'Harley',
    relations: ['Anarky', 'Duela Dent', 'Lucy'],
    twins: {
        'Jared Leto': 'Suicide Squad',
        'Joaquin Phoenix': 'Joker',
        'Heath Ledger': 'The Dark Knight',
        'Jack Nicholson': 'Tim Burton Batman',
    },
};

function passedByReference(refObj) {
    refObj.henchwoman = 'Adam West';
}
passedByReference(obj);
console.log(obj.henchwoman);
// expect(obj.henchwoman).to.equal(FILL_ME_IN);

const assignedObj = obj;
assignedObj['relations'] = [1, 2, 3];
console.log(obj['relations']);
// expect(obj['relations']).to.deep.equal(FILL_ME_IN);

const copiedObj = Object.assign({}, obj);
copiedObj.mastermind = 'James Wood';
console.log(obj.mastermind);
// expect(obj.mastermind).to.equal(FILL_ME_IN);

obj.henchwoman = 'Harley';
console.log(copiedObj.henchwoman);
// expect(copiedObj.henchwoman).to.equal(FILL_ME_IN);

delete obj.twins['Jared Leto'];
console.log('Jared Leto' in copiedObj.twins);
// expect('Jared Leto' in copiedObj.twins).to.equal(FILL_ME_IN);