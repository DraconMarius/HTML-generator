const inquirer = require('inquirer');
const fs = require('fs');
const htmlBlock = (response) =>
    `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <title>HTML generator</title>
    </head>
    
    <body>
        <div>
            <div class="jumbotron">
                <h1 id="name">${response.name}</h1>
                <h2 id="location">${response.location}</h2>
                <p id="description"> ${response.bio}</p>
                <h3 id="contact-header"></h3>
                <ul id="contact-list" class="list-group">
                    <li class="list-group-item"><a href="${response.LinkedIn}">LinkedIn</a></li>
                    <li class="list-group-item"><a href="https://github.com/${response.gitHub}">GitHub</a></li>
                </ul>
            </div>
        </div>
    </body>
    
    </html>`;

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
]).then((response) => {
    const generateHTML = htmlBlock(response);

    fs.writeFile('index.html', generateHTML, (error) => {
        error ? console.error(error) : console.log('successfully created index.html')
    });
});