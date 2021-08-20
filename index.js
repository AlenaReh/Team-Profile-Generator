// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const chalk = require("chalk");
// const expressValidator = require('express-validator');
// const util = require('util');

const Employee = require('./lib/employee.js');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');

const generateHTML = require ('./dist/generateHTML');

let team = [];

// prompt questions
const init = () => {
    // const Manager = require('./lib/manager');
    inquirer.prompt ([ 
    {
        type: 'input',
        name: 'name',
        message: `What is the team manager's name?`
        // The users input must be a letter
        // validate: val => /[a-z]/gi.test(val),    
    },
    {
        type: 'input',
        name: 'id',
        message: `What is the team manager's ID?`
        // validateId:
        // validate: val => /[1-9]/gi.test(val), 
        
    },
    {
        type: 'input',
        name: 'email',
        message: `What is the team manager's email?`,
        // validateEmail
    },
    {
        type: 'input',
        name: 'managerOfficeNumber',
        message: `What is the team manager's office number?`,
        // validateOffice
    },
])
    .then((data) => {
        let manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        team.push(manager);
        // writeToFile('index.html', generateHTML(data));
        // console.log(data)
        addNextMember();
    });
}

const addNextMember = () => {
    inquirer
        .prompt ([
            {
                type: 'list',
                name: 'teamMember',
                message: 'What type of team member would you like to add?',
                choices: ['Engineer', 'Intern', `I don't want to add any more team members`],
            },
        ])
        .then((data) => {
            if (data.employee === 'Engineer' ) {
                addEngineer ();
            } 
            else if (data.employee === 'Intern') {
                addIntern();
            }
            else {
                createTeam();
            }
        });
};

// // function to write HTML file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, (err) => {
//         err ? console.log(err) : console.log("Success! Your HTML file has been generated");
//     })
// }

//create a function addEngineer() with prompt;
const addEngineer = () => {
    inquirer.prompt ([
    {
        type: 'input',
        name: 'name',
        message: `What is your engineer's name?`
    },
    {
        type: 'input',
        name: 'id',
        message: `What is your engineer's ID?`
    },
    {
        type: 'input',
        name: 'email',
        message: `What is your engineer's email?`
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: `What is your engineer's GitHub username?`
    },
]).then ((data) => {
    let engineer = new Engineer (data.name, data.id, data.email, data.githubUsername);
    team.push(engineer);
    addMoreMembers();
    })  
};

//create a function addIntern() with prompt;
const addIntern = () => {
    inquirer.prompt ([
    {
        type: 'input',
        name: 'name',
        message: `What is your intern's name?`
    },
    {
        type: 'input',
        name: 'id',
        message: `What is your intern's ID?`
    },
    {
        type: 'input',
        name: 'email',
        message: `What is your intern's email?`
    },
    {
        type: 'input',
        name: 'school',
        message: `What is your intern's school?`
    },
    ]).then ((data) => {
        let intern = new Intern (data.name, data.id, data.email, data.school);
        team.push(intern);
        addMoreMembers();
        })
    }

// //create a function createTeam() with mock??;
// function createTeam () {
//     fs.writeFile(fileName, data, (err) => {
//         err ? console.log(err) : console.log("Success! Your HTML file has been generated");
//     })
// }

//create a function to ask if user needs to add more members to the team;
const addMoreMembers = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'teamMember',
                message: 'What type of team member would you like to add?',
                choices: ['Engineer', 'Intern', `I don't want to add any more team members`]
            }
        ])
        .then((data) => {
            if(data.teamMember === Engineer) {
                addEngineer();
            }
            else if(data.teamMember === Intern) {
                addIntern();
            }
            else {
                createTeam();
            }
        });
}

// Function call to initialize app
init();