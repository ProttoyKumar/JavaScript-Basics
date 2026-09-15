// arrays: collection of items
let marks = [97, 82, 76, 65, 54];
//console.log(marks);
//console.log(typeof(marks));
//console.log(marks.length); //5
marks[1] = 85;
console.log(marks);

let heroes = ['superman', 'spiderman', 'ironman', 'hulk', 'thor'];
console.log(heroes);
console.log(heroes.length)
// indices
console.log(heroes[0]); //superman
console.log(heroes[1]); //spiderman
console.log(heroes[5]); //undefined

// Arrays are mutable in JS
// But, strings are immutable 

// print all items in an array
// for-of 
//let fruits = ["Apple", "Banana", "Mango"];
// for (let i of fruits){
//   console.log(i);
// }

// for loop
let fruits = ["Apple", "Banana", "Mango"];
for (let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

let cities = ['dhaka', 'rangpur', 'barisal'];
for (let i of cities){
    console.log(i.toUpperCase());
}

// problem 1
let arr = [85,97,44,37,76,60];
let sum = 0;

for (let i of arr){
    sum = sum + i;
} let avg = sum / arr.length;
console.log('average: ', avg);

// problem 2
let prices = [250,645,300,900,50];
let off = 10 / 100;
for (let i of prices){
    i = i - i*off;
    console.log('Price After Offer', i);
}

// Array Methods
let foodItems = ['potato', 'apple', 'litchi', 'tomato'];
//foodItems.push('burger');
//console.log(foodItems);
foodItems.push('rice','dal');
console.log(foodItems);
// push: add to end

let items = ['banana', 'apple', 'mango', 'carrot'];
console.log(items.pop());
console.log(items);
// pop: delete from end and return

// toString method
// concat
let marvel_heroes = ['thor', 'spiderman', 'ironman'];
let dc_heroes = ['batman', 'wonder woman'];
let m = marvel_heroes.concat(dc_heroes);
console.log(m);
console.log(marvel_heroes);

// unshift 
// add to start
let a =  ['thor', 'spiderman', 'ironman'];
a.unshift('hulk'); // add hulk at index 0
console.log(a);

// shift
// delete from start and return
a.shift();
console.log(a); // delete 'hulk'

// slice: same as string
let x = [96, 87, 69, 77, 89];
console.log(x.slice(1,3)); //[87,69]
console.log(x.slice(1,)); //[87,69,77,89]

// splice
let months = ["Jan", "March", "April", "June"];
console.log(months);
// Inserts 'Feb' at index 1
months.splice(1,0,"Feb");
console.log(months);
// Replaces 1 element at index 4
months.splice(4,1,'May');
console.log(months);
// removes 2 elements starting from index 0
months.splice(0,2);
console.log(months);

let i = [1,2,3,4,5,6,7];
// replace 3,4 with 101, 102
//i.splice(2,2,101,102);
//console.log(i);
// delete 4
//i.splice(3,1);
//console.log(i);
// replace 4 by 104
i.splice(3,1,104);
console.log(i);

// add 101 at index 1
i.splice(1,0,101);
console.log(i);

// problem 1
let companies = ['Bloomberg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix'];
console.log(companies);
// remove 1st element
companies.splice(0,1);
console.log(companies);
// replace Uber by Ola
companies.splice(1,1,'Ola');
console.log(companies);
// add Amazon to end
companies.push('Amazon');
console.log(companies);