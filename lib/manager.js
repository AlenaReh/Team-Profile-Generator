const Employee = require ('./employee');

class Manager extends Employee {
    constructor (officeNumber, role) {
        super (name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        this.role = role;
    }
    getRole (role) {

    }
}

const manager = new Manager ();

console.log('---Manager---');

manager.getRole ();