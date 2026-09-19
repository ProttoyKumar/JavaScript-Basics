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
};

Rahim.__proto__ = employee;

const Jonn = {
    salary: 45000,
};

Jonn.__proto__ = employee;
Jonn.calcTax()
// prototype: ref. to an object
