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
