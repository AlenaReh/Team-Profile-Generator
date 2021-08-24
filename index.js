// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const chalk = require("chalk");

const Employee = require('./lib/employee.js');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');

const generateHTML = require ('./dist/generateHTML');

// The users input must be a string
const validateName = answer => {
    const pass = answer.match(
      /^[a-zA-Z]+$/
    );
    if (pass) {
      return true;
    }
    return (chalk.red("Please enter a valid name."));
  };
// validate a numerical value
const validateNumber = answer => {
    const pass = answer.match(
      '^[0-9]+$'
    );
    if (pass) {
      return true;
    }
    return (chalk.red("Please enter a numeric value."));
  };
  
  // validating an Email input
  const validateEmail = answer => {
    const pass = answer.match(
      /\S+@\S+\.\S+/
    );
    if (pass) {
      return true;
    }
    return (chalk.red("Please enter a valid email address."));
  };

let team = [];

// prompt questions
const init = () => {
    inquirer.prompt ([ 
    {
        type: 'input',
        name: 'name',
        message: (chalk.yellow(`What is the team manager's name?`)),
        validate: validateName,
    },
    {
        type: 'input',
        name: 'id',
        message: (chalk.yellow(`What is the team manager's ID?`)),
        validate: validateNumber,
    },
    {
        type: 'input',
        name: 'email',
        message: (chalk.yellow(`What is the team manager's email?`)),
        validate: validateEmail,
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: (chalk.yellow(`What is the team manager's office number?`)),
        validate: validateNumber,
    },
])
    .then((data) => {
        let manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        team.push(manager);
        addNextMember();
    });
}

const addNextMember = () => {
    inquirer
        .prompt ([
            {
                type: 'list',
                name: 'teamMember',
                message: (chalk.green('What type of team member would you like to add?')),
                choices: ['Engineer', 'Intern', `I don't want to add any more team members`],
            },
        ])
        .then((data) => {
            if (data.teamMember === 'Engineer' ) {
                addEngineer ();
            } 
            else if (data.teamMember === 'Intern') {
                addIntern();
            }
            else {
                createTeam();
            }
        });
};


//create a function addEngineer() with prompt;
const addEngineer = () => {
    inquirer.prompt ([
    {
        type: 'input',
        name: 'name',
        message: (chalk.yellow(`What is your engineer's name?`)),
        validate: validateName,
    },
    {
        type: 'input',
        name: 'id',
        message: (chalk.yellow(`What is your engineer's ID?`)),
        validate: validateNumber,
    },
    {
        type: 'input',
        name: 'email',
        message: (chalk.yellow(`What is your engineer's email?`)),
        validate: validateEmail,
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: (chalk.yellow(`What is your engineer's GitHub username?`))
    },
]).then ((data) => {
    let engineer = new Engineer (data.name, data.id, data.email, data.githubUsername);
    team.push(engineer);
    addNextMember();
    })  
};

//create a function addIntern() with prompt;
const addIntern = () => {
    inquirer.prompt ([
    {
        type: 'input',
        name: 'name',
        message: (chalk.yellow(`What is your intern's name?`)),
        validate: validateName,
    },
    {
        type: 'input',
        name: 'id',
        message: (chalk.yellow(`What is your intern's ID?`)),
        validate: validateNumber
    },
    {
        type: 'input',
        name: 'email',
        message: (chalk.yellow(`What is your intern's email?`)),
        validate: validateEmail
    },
    {
        type: 'input',
        name: 'school',
        message: (chalk.yellow(`What is your intern's school?`))
    },
    ]).then ((data) => {
        let intern = new Intern (data.name, data.id, data.email, data.school);
        team.push(intern);
        addNextMember();
        })
    }

//create a function createTeam() with mock??;
function createTeam () {
    fs.writeFile('myteam.html', generateHTML(team), (err) => {
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
                message: (chalk.green('What type of team member would you like to add?')),
                choices: ['Engineer', 'Intern', `I don't want to add any more team members`]
            }
        ])
        .then((data) => {
            if(data.teamMember === Engineer) {
                addEngineer();
            }
            if(data.teamMember === Intern) {
                addIntern();
            }
            else {
                createTeam();
            }
        });
}

// Function call to initialize app
init();