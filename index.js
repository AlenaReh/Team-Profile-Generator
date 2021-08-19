// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const util = require('util');

const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const generateHTML = require ('./dist/generateHTML');

let team = [];

// prompt questions
const init = () => {
    inquirer.prompt ([ 
    {
        type: 'input',
        name: 'managerName',
        message: `What is the team manager's name?`,
        // validateName: validateName = string => {
        //     return string !== '' || `Please put in the team manager's name to continue`
        // }
    },
    {
        type: 'input',
        name: 'managerId',
        message: `What is the team manager's ID?`,
        // validateId:
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: `What is the team manager's email?`,
        // validateEmail
    },
    {
        type: 'input',
        name: 'managerOfficeNumber',
        message: `What is the team manager's office number?`,
        // validateOffice
    },


    {
        type: 'list',
        name: 'teamMember',
        message: 'What type of team member would you like to add?',
        choices: ['Engineer', 'Intern', `I don't want to add any more team members`]
    },
    ])
    .then((data) => {
        let manager = new Manager(data.name, data.id, data.email, data.office);
        team.push(manager);
        // writeToFile('index.html', generateHTML(data));
        // console.log(data)
        addNextMember();
    });
}

    // {
    //     type: 'input',
    //     name: 'engineerName',
    //     message: `What is your engineer's name?`
    // },
    // {
    //     type: 'input',
    //     name: 'engineerId',
    //     message: `What is your engineer's ID?`
    // },
    // {
    //     type: 'input',
    //     name: 'engineerEmail',
    //     message: `What is your engineer's email?`
    // },
    // {
    //     type: 'input',
    //     name: 'engineerGithub',
    //     message: `What is your engineer's GitHub username?`
    // },
    // 
    // {
    //     type: 'input',
    //     name: 'internName',
    //     message: `What is your intern's name?`
    // },
    // {
    //     type: 'input',
    //     name: 'internId',
    //     message: `What is your intern's ID?`
    // },
    // {
    //     type: 'input',
    //     name: 'internEmail',
    //     message: `What is your intern's email?`
    // },
    // {
    //     type: 'input',
    //     name: 'internSchool',
    //     message: `What is your intern's school?`
    // },
    // {
    //     type: 'list',
    //     name: 'teamMember',
    //     message: 'What type of team member would you like to add?',
    //     choices: ['Engineer', 'Intern', `I don't want to add any more team members`]
    // }

const addNextMember = () => {
    inquirer
        .prompt ([
            {
                type: 'list',
                name: 'teamMember',
                message: 'What type of team member would you like to add?',
                choices: ['Engineer', 'Intern', `I don't want to add any more team members`]
            },
        ])
        .then((data) => {
            if (data.employee === 'Engineer' ) {
                addEngineer ();
            } 
            if (data.employee === 'Intern') {
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
//create a function addIntern() with prompt;
//create a function createTeam() with mock??;
function createTeam () {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log("Success! Your HTML file has been generated");
    })
}

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
            if(data.teamMember !== `I don't want to add any more team members`) {
                addNextMember();
            }
            else {
                createTeam();
            }
        });
}

// Function call to initialize app
init();