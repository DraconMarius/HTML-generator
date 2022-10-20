const inquirer = require('inquirer');
const fs = require('fs');
const htmlBlock = (response) =>
    ``;

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Who dis?',
    },
    {
        type: 'input',
        name: 'location',
        message: 'Where you at?',
    },
    {
        type: 'input',
        name: 'bio',
        message: "What's your favorite food",
    },
    {
        type: 'input',
        name: 'LinkedIn',
        message: "What's your LinkedIn url?",
    },
    {
        type: 'input',
        name: 'gitHub',
        message: "What's your gitHub username?"
    },
])
