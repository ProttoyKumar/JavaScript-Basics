let fullName = "Prottoy Prodhan";

console.log(fullName);

x = null;
console.log(x);

y = undefined;
console.log(y);

isFollow = true;
console.log(isFollow);
console.log(typeof(isFollow));
isFollow = false;
console.log(isFollow);

totalPrice = 50.5; // camel case
console.log(totalPrice);

let name = 'tony';
let age = 24;
age = 59;
age = 86;
console.log(name);
console.log(age);
// let: variables cannot be re-declared but can be updated.

const PI = 3.14;
console.log(PI);
// const: variables cannot be re-declared and cannot be updated.

// let a;
// a = 10;
// console.log(a);

// const b;
// b = 10;
// console.log(b);
// const variables must be initialized when they are declared.


// undefined type: 
let a;
a = null;
console.log(a)
console.log(typeof(a))

// arrays
const student = {
    name:'A', age:24 , cgpa:2.74, 'isPass':true
};
console.log(student);

console.log(student['name']);
console.log(student['age']);
console.log(student['cgpa']);
console.log(student['isPass']);

// alternative
console.log(student.name);


student['age'] = student['age'] + 1;
console.log(student);

// let can be updated
// const cannot be updated
// const obj >> key can be updated

console.log(typeof student);
console.log(typeof student.cgpa);

// practice question
const product = {
    name:'ABC Ball Pen', rating:4.5, price:270, offer:.05, isDeal:true
};

console.log(product);
console.log(typeof product);

const profile = {
    name:'Joy Prottoy', followers:569000, following:4, isFollow:true
};

console.log(profile);
console.log(typeof profile.name);

// '1' + '2' 
// output '12'
// 'abc' + '123'
// output 'abc123'
// 1 + '2'
// output '12'

// This is a single line comment.

// This line prints hello world!
console.log('hello world!');

// Arithmetic operators
// let m = 5;
// let n = 2;

// console.log('m =', m);
// console.log('n =', n);
// console.log('m + n =', m+n);
// console.log('m - n =', m-n);
// console.log('m x n =', m*n);
// console.log('m / n =', m/n);

// modulus operator
// console.log(m%n);
// exponential operator
// console.log(m**n); //m^n

// unary operators
// increment
// let m = 5;
// let n = 2;

// console.log('m =', m);
// console.log('n =', n);
// m++; // m = m + 1
// console.log('m =', m);

// decrement
// m--; // m = m - 1;
// console.log('m =', m);
// console.log('++m =', ++m) // pre increment, 1st add 1 then print result

// console.log('m++ =', m++);
// console.log('m =', m); // post increment

// assignment operator
let m = 5;
let n = 2;
console.log('m =', m);
console.log(m+=5); // 10
console.log(n -= 1); // 1