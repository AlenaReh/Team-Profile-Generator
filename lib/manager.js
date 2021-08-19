const Employee = require ('./lib/employee.js');

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        // this.name = name;
        // this.id = id;
        // this.email = email;
        this.officeNumber = officeNumber;
    }
    getRole () {
        return 'Manager';
    }

    // getOfficeNumber () {
    //     return this.officeNumber;
    // }
}

// console.log('---Manager---');

module.exports = Manager; 