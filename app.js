const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// const questions = [

//     {
//         name: 'title',
//         type: 'input',
//         message: 'What is the title of the project?'
//     },
//     {
//         name: 'description',
//         type: 'input',
//         message: 'What is the description of the project?'
//     },
//     {
//         name: 'installation',
//         type: 'input',
//         message: 'What are the steps required to install the project?',
//     },
//     {
//         name: 'usage',
//         type: 'input',
//         message: 'What are the instructions and/or examples for the use of the project?',
//     },
//     {
//         name: 'license',
//         type: 'list',
//         message: 'What license did you use for the project?',
//         choices: ['Apache License 2.0', 'Boost Software License 1.0', 'GNU General Public License 2.0', 'MIT License', 'Mozilla Public License', 'The Unlicense']
//     },

// ];
// and to create objects for each team member (using the correct classes as blueprints!)
const karen = new Manager('Karen', 101, 'karen@test.com', '555-555-5555');

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
