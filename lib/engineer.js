const Employee = require ('./lib/employee.js');

class Engineer extends Employee {
    constructor (name, id, email, githubUsername) {
        super (name, id, email);
        // this.name = name;
        // this.id = id;
        // this.email = email
        this.githubUsername = githubUsername;

    }

    getGithub () {
        return this.githubUsername;

    }

    getRole () {
        return 'Engineer';
    }
}


// console.log('---Engineer---');
//do I need to do??
module.exports = Engineer;

