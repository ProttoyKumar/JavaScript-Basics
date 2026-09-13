let name = 'Brownie';
console.log(name);
//check type of name
console.log(typeof(name));
//check length
console.log(name.length);
console.log(name[0]); //B
console.log(name[1]); //r
console.log(name[6]); //e

let obj = {'name':'Joy', 'age':29};
console.log(`My name is ${obj.name}. I'm ${obj.age} years old.`);
// `` is called backticks 

let item = "pen";
let price = 5;
let quantity = 2;

console.log(`I bought ${quantity} ${item}s for $${price * quantity}.`);
console.log('Apna\nCollege'); // new line
console.log('Apna\tCollege');
let str = 'Apna\tCollege';
console.log(str.length); //12

// string methods
console.log('Apna College'.toUpperCase());

console.log('Apna College'.toLowerCase());
console.log(' ApnaCollege '.trim()); //Apna College
// join str2 with str1
console.log('Apna'.concat('College')); //Apna College

console.log('I love dogs'.replace('dogs', 'both cats and dogs'));
console.log('abc'.charAt(0)); //a
console.log('abc'.charAt(1)); //b
console.log('abc'.charAt(2)); //c
console.log('ApnaCollge'.slice(0,4)); //Apna
console.log('ApnaCollge'.slice(4,)); //College
console.log('Apna' + 'College'); //ApnaCollege

// replaceAll
// string in JS is immutable
