const inquirer = require('inquirer');
const fs = require('fs')

inquirer
.prompt([
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter a brief description of your project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Enter installation instructions for users',
        name: "installation"
    },
    {
        type: 'input',
        message: 'Enter instructions for usage',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Enter instructions for test',
        name: 'test'
    },
    {
        type: 'list',
        message: 'Choose a license for your project',
        name: 'license',
        choices: ['MIT', 'GNU AGPlv3', 'ISC', 'GNU GPLv3']
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    },
       
]
.then(function(data) {
    console.log(data);

    var md = `# ${data.title}

    ## ${data.description}
    ![GitHub License](https://img.shields.io/badge/License-${data.license}-yellow.svg)
    ## Table of Contents
    [Installation](#installation)
    [Usage](#usage)
    [Contributing](#contributing)
    [Tests](#tests)
    [License](#license)
    [Questions](#questions)
    ## Installation
    ${data.installation}
    ## Usage
    ${data.usage}
    ## Contributing
    ${data.contributing}
    ## Tests
    ${data.tests}
    ## License
    This project is licensed under the terms of the ${data.license} License.
    ## Questions
    [Github Profile](https://www.github.com/${data.github})
    If you have any questions, you may contact me at [${data.email}](mailto:${data.email})`
    
      fs.writeFile('readme.md', md, (err) =>
        err ? console.log(err) : console.log('Success!')
      );
    })); 
