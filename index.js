// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project.',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project.'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter installation instructions for the project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter any usage information that you would like in the README file.'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Enter contribution guidelines for the project.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter any test instructions for the project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please pick the license that will apply for this project.',
        choices: ['AGPLv3', 'GPLv3', 'LGPLv3', 'Mozilla', 'Apache', 'MIT', 'Boost', 'Unlicensed']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, markdownOutput) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, markdownOutput, err => {
          // if error, reject the Promise
          if (err) {
            reject(err);
            // return out of the function
            return;
          }
    
          // if everything went well, send the data
          resolve({
            ok: true,
            message: 'File created!'
          });
        });
      });
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then(promptAnswers => {
        return generateMarkdown(promptAnswers);
    })
    .then(markdownOutput => {
        console.log(markdownOutput);
        const fileName = './dist/README.md';
        return writeToFile(fileName, markdownOutput);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    });
};

// Function call to initialize app
init();
