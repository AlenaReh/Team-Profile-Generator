const Employee = require ('./employee');

class Intern extends Employee {
    constructor (school) {
        super (name, id, email);
        this.name = name;
        this.id = id;
        this.email = email
        this.school = school

    }
    getSchool (school) {

    }

    getRole(role) {

    }
}


const intern = new Intern ();

console.log('---Intern---');

intern.getSchool();
intern.getRole();