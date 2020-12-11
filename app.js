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

// Write code to use inquirer to gather information about the development team members,

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

]

function init() {

    inquirer
        .prompt(questions)

        .then((answers) => {

            if (answers.role === 'Engineer') {

                engineerQuestion(answers);

            } else if (answers.role === 'Intern') {

                internQuestion(answers);

            } else if (answers.role === 'Manager') {

                managerQuestion(answers);

            }

        })

}

init()


function engineerQuestion(answers) {

    inquirer
        .prompt(
            {
                name: 'github',
                type: 'input',
                message: 'What is their GitHub username?',
            })

        .then((engineerAnswers) => {

            const engineer = new Engineer(answers.name, answers.id, answers.email, engineerAnswers.github);

            employeeList.push(engineer);

            console.log(employeeList);

        })

}

function internQuestion(answers) {

    inquirer
        .prompt(
            {
                name: 'school',
                type: 'input',
                message: 'What school are they attending?',
            })

        .then((internAnswers) => {

            const intern = new Intern(answers.name, answers.id, answers.email, internAnswers.school);

            employeeList.push(intern);

            console.log(employeeList);

        })

}

function managerQuestion(answers) {

    inquirer
        .prompt(
            {
                name: 'officeNumber',
                type: 'input',
                message: 'What is their office number?',
            })

        .then((managerAnswers) => {

            const manager = new Manager(answers.name, answers.id, answers.email, managerAnswers.officeNumber);

            employeeList.push(manager);

            console.log(employeeList);

        })

}
// and to create objects for each team member (using the correct classes as blueprints!)

// console.log(karen);
karen.getRole();
karen.getOfficeNumber();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
