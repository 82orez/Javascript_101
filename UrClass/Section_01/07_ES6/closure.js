const tagMaker = tag => content => `<${tag}>${content}</${tag}>`;

const divMaker = tagMaker('div');
console.log(divMaker('Hello'));

const anchorMaker = tagMaker('a');
console.log(anchorMaker('go'));