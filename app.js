const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employeeList = [];

const questions = [
    {
        name: 'name',
        type: 'input',
        message: 'What is the name of the employee?'
    },
    {
        name: 'id',
        type: 'input',
        message: 'What is their employee ID?'
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is their email?',
    },
    {
        name: 'role',
        type: 'list',
        message: 'What is their role?',
        choices: ['Engineer', 'Intern', 'Manager']
    },
    {
        when: employee => {
            return employee.role === 'Engineer'
        },
        name: 'github',
        type: 'input',
        message: 'What is their GitHub username?',
    },
    {
        when: employee => {
            return employee.role === 'Intern'
        },
        name: 'school',
        type: 'input',
        message: 'What school are they attending?',
    },
    {
        when: employee => {
            return employee.role === 'Manager'
        },
        name: 'officeNumber',
        type: 'input',
        message: 'What is their office number?',
    },

]

// Write code to use inquirer to gather information about the development team members, and to create objects for each team member (using the correct classes as blueprints!)

function init() {

    inquirer
        .prompt(questions)

        .then((answers) => {

            if (answers.role === 'Engineer') {

                newEngineer(answers);

            } else if (answers.role === 'Intern') {

                newIntern(answers);

            } else if (answers.role === 'Manager') {

                newManager(answers);

            }

        })

        .then(() => addAnotherEmployee());

}

init()


function newEngineer(answers) {

    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);

    employeeList.push(engineer);

}

function newIntern(answers) {

    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);

    employeeList.push(intern);

}

function newManager(answers) {

    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);

    employeeList.push(manager);

}

function addAnotherEmployee() {

    inquirer
    .prompt(
        {
            name: 'anotherEmployee',
            type: 'confirm',
            message: 'Would you like to add another employee?',
        })

    .then((confirm) => {

        if(confirm.anotherEmployee === true) {

            init();

        } else {

            createHtml();
            
            return

        }
    })

}

// After the user has input all employees desired, call the `render` function (required above) and pass in an array containing all employee objects; the `render` function will generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML returned from the `render` function. Now write it to a file named `team.html` in the `output` folder. You can use the variable `outputPath` above target this location.

function createHtml() {

    const employeeHtml = render(employeeList);

    fs.writeFile(outputPath, employeeHtml, (err) => {

        if(err) console.log(err);

    })

}