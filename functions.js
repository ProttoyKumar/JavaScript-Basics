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


