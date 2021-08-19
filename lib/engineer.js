const Employee = require ('./employee');

class Engineer extends Employee {
    constructor (githubUsername) {
        super (name, id, email);
        this.name = name;
        this.id = id;
        this.email = email
        this.githubUsername = githubUsername;

    }

    getGithub (githubUsername) {

    }

    getRole (role) {

    }
}


const engineer = new Engineer ();

console.log('---Engineer---');
manager.getRole();
manager.getGithub();
