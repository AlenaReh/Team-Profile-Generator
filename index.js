// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generateHTML = require ('./dist:/generateHTML');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: '',
        message: '?'
    },
    {
        type: 'input',
        name: '',
        message: '?'
    },
    {
        type: 'input',
        name: '',
        message: '?'
    },
    {
        type: 'input',
        name: '',
        message: "?"
    },
    {
        type: 'input',
        name: '',
        message: ''
    },
    {
        type: 'input',
        name: '',
        message: '?',
    },
    {
        type: 'list',
        name: '',
        message: '?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'dependencies',
        message: 'What command should be run to install dependencies?',
        default: ('npm i')
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
        default: ('npm test')
    },
    {
        type: 'input',
        name: '',
        message: '?',
    },
    {
        type: 'input',
        name: '',
        message: '?',
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
            writeToFile('index.html', generateHTML(data));
            // console.log(data)
        })
}

// Function call to initialize app
init();