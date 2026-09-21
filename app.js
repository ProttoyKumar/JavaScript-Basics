const student = {
    fullName: 'JoyProttoy',
    marks: 72,
    printName: function () {
        console.log(this.fullName); //student.fullName
    },
};

const employee = {
    calcTax() {
        console.log('tax rate is 10%');
    },
};

const Rahim = {
    salary: 50000,
    calcTax() {
        console.log('tax rate is 20%');
    },
};

Rahim.__proto__ = employee;

const Jonn = {
    salary: 35000,
};

Jonn.__proto__ = employee;
// prototype: ref. to an object
// if object and prototype has same method, then 
// object method will be used

Rahim.calcTax(); //tax rate is 20%

class ToyotaCar {
    start() {
        console.log('start');
    }

    stop() {
        console.log('stop');
    }

    setBrand(brand) {
        this.brand = brand;
    }
}

// create an object of class ToyotaCar

let fortuner = new ToyotaCar();
fortuner.setBrand('fortuner');
let lexus = new ToyotaCar();
lexus.setBrand('lexus');

// constructor is a special method inside a class 
// that runs automatically when create a new object from that class.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let person1 = new Person('Prottoy', 28);
// Create a new Person object with the name Prottoy and age 28, 
// and store that object in person1.

// class → Blueprint 
// constructor → Initializes the object 
// new → Creates a new object 
// this → Refers to the newly created object 


// inheritence:
class Parent{
    hello() {
        console.log('hello');
    }
}
class Child extends Parent {}

let obj1 = new Child();
obj1.hello(); //hello

// Child inherits from Parent
// So, a child object can use the hello() method 
// even though hello() was written inside Parent

// another example
class Student {
    eat() {
        console.log('eat');
    }

    sleep() {
        console.log('sleep');
    }
}

class Analyst extends Student{

    constructor(branch) {
        super();
        this.branch = branch;
    }

    work() {
        console.log('Analyze data and make report')
    }
}

let Joy = new Analyst;
Joy.work() //Analyze data and make report
Joy.eat() //eat

// extends: creates inheritance
// super: call the parent constructor
// this: refers to current obj

class User {
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewdata() {
        console.log('view the user data');
    }
}

class Admin extends User {
    constructor(name, email, department) {
        super(name, email);
        this.department = department;
    }
    editData() {
        console.log('access to edit data')
    }
}

let admin1 = new Admin('Joy', 'abc@gmail.com', 'Research');


