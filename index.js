// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your projects title? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your projects title.')
                } return false;
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project.',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('You must enter a description of your project.')
                } return false;
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install this application?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Explain how to use your application.'
        },
        {
            type: 'rawlist',
            name: 'license',
            message: 'Would you like to add a license for your project?',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense', 'None'],
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Name all contributors to this project.'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub username.'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
    ]).then(answers => writeToFile('README.md', generateMarkdown(answers)));
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //console.log(data);
    fs.writeFile(path.join(__dirname, fileName), data, err => {
        if (err) {
            console.error(err);
        }
    });
};

// TODO: Create a function to initialize app
function init() {
    questions();
}

// Function call to initialize app
 init();
