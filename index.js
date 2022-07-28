const inquirer = require('inquirer');
// const Employee = require('./lib/Employee');
// const Engineer = require('./lib/Engineer');
const fs = require('fs');
const generateHTML = require('./src/page-template');


const init = () => {
    return inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is the name of the employee?',
          validate: titleInput => {
              if (titleInput) {
                  return true;
              }
              else {
                  console.log('Please provide a name for the Employee');
                  return false;
              }
          }
        },
        
        {
          type: 'list',
          name: 'info',
          message: 'What type of employee are they?',
          choices : ['Engineer', 'Manager', 'Intern'],
        }
    ]);
    };
init()

.then(init => {
    const pageHTML = generateHTML(init);
fs.writeFile('./dist/index.html', pageHTML, err => {
    if (err) throw err;
  console.log('Html file created!');
  
    
});
});



