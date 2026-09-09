//let a = 5;
//let b = 2;

//console.log('5 == 2', a==b); //false
//console.log('5 != 2', a!=b); //true

//let a = 5; //number
//let b = '5';

//console.log(a == b); //true
//console.log(a != b); //false
//console.log(a===b); //checks both value and type
//console.log('5 > 3', 5 > 3); //true
//console.log('5 <= 5', 5 <= 5); //true
//console.log('6 >= 5', 6 >= 5); //true

//Logical operators
//Logical AND

let a = 6;
let b = 5; 
let cond1 = a > b; //true
let cond2 = a === 6; //true
console.log(cond1 && cond2); //true
console.log(6>5 && 6===5); //false
console.log(6<5 && 6===6); //false

//Logical OR
console.log(6<5 || 6===6); //true
//Not
console.log(!true); //false
console.log(!(6>5)); //false
console.log(!(6===6)); //false

//conditional statements
let x = 2;
if(x < 5) {
    console.log('Less than 5');
}

x = 5;
if(x > 10) {
    console.log('Greater than 10');
} else {
    console.log('not greater than 10');
}

let age = 25;
age = 16;
if(age>= 18) {
    console.log('Age is 18 or above');
} else {
    console.log('Age is less than 18');
}

//odd or even
let n = 10;
n = 100;
if (n%2===0) {
    console.log(n, 'is even');
} else {
    console.log(n, 'is odd');
}

if (age < 18) {
    console.log('Junior');
} else if (age > 60) {
    console.log('senior');
} else {
    console.log('middle');
}

//ternary operator
age = 20;
let result = age >= 18 ? 'Adult':'Not Adult';
console.log(result);

// condition ? true output : false output

//Practice-Problems
x = 87;

if (x%3===0){
    console.log(x, 'is a multiple of 3');
} else {
    console.log(x, 'not a multiple of 3');
}

let score = 87;
let grade;
score = 65;

if (score >= 80) {
    grade = 'A';
} else if (score >= 70) {
    grade = 'B';
} else if (score >= 60) {
    grade = 'C';
} else if (score >= 50) {
    grade = 'D';
} else {
    grade = 'F';
}
console.log(grade);

