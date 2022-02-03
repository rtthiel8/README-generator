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
            message: 'What is your projects title?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install this?'
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
        }
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
}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
questions();
