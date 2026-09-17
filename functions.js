console.log("Protiksha");

let name = "Protiksha";
console.log(name.toUpperCase());

let arr = [1, 2, 3];
arr.push(4);
console.log(arr);

function myFunction(a, b) {
  console.log(`sum of ${a} and ${b} is:`, a + b);
}

myFunction(1, 2);

// return
function sum(a, b) {
  // a,b local variables ---> scope
  result = a + b;
  return result;
}
let val = sum(1, 2);
console.log(val);

//function parameters --> local variables

// arrow function --> compact way to write a function

const arrowSum = (a, b) => {
  return a + b;
};
console.log(arrowSum(2, -3));

const arrowMultiply = (a, b) => {
  console.log(a * b);
};
arrowMultiply(2, 3);

const myFunc = (a, b) => console.log(a + b);
myFunc(2, -3);

// problem 1: solution
function countVowels(str1) {
    let count = 0;

    for (const i of str1) {
        if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
            count += 1;
        }
    }

    console.log("Number of vowels:", count);
}

countVowels("apnacollege");


const arrCount = str => {
    let count = 0;

    for (const i of str) {
        if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
            count += 1;
        }
    }

    console.log("Number of vowels:", count);
};
arrCount('aeiou');

// forEach loop in Arrays
// callback is a function passed as an argument of another function

//let array = [2,-2];

array.forEach(function squ(num){
   console.log(num*num);
});



let cities = ['dhaka','ctg','rangpur'];
cities.forEach(function city(name){
  console.log(name.toUpperCase());
});

// map: Execute a callback fun on each element of an array and return a new array.

let  array = [1,2,3,4,5];

let newarr = array.map(function squ(x){
   return x*x;
});

console.log(newarr);

// filter
let n = [1,2,3,4,5];
let evens = n.filter(function filterEven(num){
  return num%2==0;
});
console.log(evens);
// reduce: 
//let nums = [1,2,3,4,5];
const output = nums.reduce((result, value) => {
  return result + value;
});

console.log(output); //15

// find largest number of an array
let nums = [1,2,3,4,5];
const largest = nums.reduce((pre, curr) => {
  return pre>curr ? pre : curr; //ternary fun:
});

console.log(largest);

// problem 1: filter out marks greater than 90
let marks = [93,87,78,67,90,100];
let toppers = marks.filter(function filterMarks(mark){
  return mark > 90;
});

console.log(toppers);

// calculate product of numbers
let i = [1,2,3,4,5];
const finalRes = i.reduce((pre, curr) => {
  return pre*curr;
});

console.log(finalRes);
