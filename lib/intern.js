const Employee = require ('./lib/employee.js');

class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        // this.name = name;
        // this.id = id;
        // this.email = email
        this.school = school;

    }
    getSchool () {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

// console.log('---Intern---');

module.exports = Intern; 