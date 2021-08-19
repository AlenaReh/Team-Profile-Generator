// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generateHTML = require ('./dist:/generateHTML');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'managerName',
        message: `What is the team manager's name?`
    },
    {
        type: 'input',
        name: 'managerId',
        message: `What is the team manager's ID?`
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: `What is the team manager's email?`
    },
    {
        type: 'input',
        name: 'managerOfficeNumber',
        message: `What is the team manager's office number?`
    },
    {
        type: 'list',
        name: 'teamMember',
        message: 'What type of team member would you like to add?',
        choices: ['Engineer', 'Intern', `I don't want to add any more team members`]
    },
    {
        type: 'input',
        name: 'engineerName',
        message: `What is your engineer's name?`
    },
    {
        type: 'input',
        name: 'engineerId',
        message: `What is your engineer's ID?`
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: `What is your engineer's email?`
    },
    {
        type: 'input',
        name: 'engineerGithub',
        message: `What is your engineer's GitHub username?`
    },
    {
        type: 'list',
        name: 'teamMember',
        message: 'What type of team member would you like to add?',
        choices: ['Engineer', 'Intern', `I don't want to add any more team members`]
    },
    {
        type: 'input',
        name: 'internName',
        message: `What is your intern's name?`
    },
    {
        type: 'input',
        name: 'internId',
        message: `What is your intern's ID?`
    },
    {
        type: 'input',
        name: 'internEmail',
        message: `What is your intern's email?`
    },
    {
        type: 'input',
        name: 'internSchool',
        message: `What is your intern's school?`
    },
    {
        type: 'list',
        name: 'teamMember',
        message: 'What type of team member would you like to add?',
        choices: ['Engineer', 'Intern', `I don't want to add any more team members`]
    }
    
];

// TODO: Create a function to write HTML file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log("Success! Your HTML file has been generated");
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile('team.html', generateHTML(data));
            // console.log(data)
        })
}

// Function call to initialize app
init();