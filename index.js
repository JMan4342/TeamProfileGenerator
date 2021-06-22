const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


inquirer
  .prompt([
    {
      type: "input",
      message: "What is the team manager's name?",
      name: "managerName",
    },
    {
      type: "input",
      message: "What is the team manager's employee ID?",
      name: "managerID",
    },
    {
      type: "input",
      message: "What is the team manager's email address?",
      name: "managerEmail",
    },
    {
      type: "input",
      message: "What is the team manager's office number?",
      name: "officeNumber",
    },
    
    // Create if statements to proceed to engineer or intern questions
    
    // Enginner questions
    {
        type: "input",
        message: "What is the engineer's name?",
        name: "engineerName",
    },
    {
        type: "input",
        message: "What is the engineer's employee ID?",
        name: "engineerID",
    },
    {
        type: "input",
        message: "What is the engineer's email address?",
        name: "engineerEmail",
    },
    {
        type: "input",
        message: "What is the engineer's GitHub account?",
        name: "engineerGithub",
    },
    
    //  Loop back to subordinateChoice
    
    //   Intern questions
    {
        type: "input",
        message: "What is the intern's name?",
        name: "internName",
    },
    {
        type: "input",
        message: "What is the intern's employee ID?",
        name: "internID",
    },
    {
        type: "input",
        message: "What is the intern's email address?",
        name: "internEmail",
    },
    {
        type: "input",
        message: "What is the intern's school?",
        name: "internSchool",
    },
    
    //   Loop back to subordinate choice
    
])
.then(function (manager) {
    console.log(manager);
    employees.push(
        new Manager(
            manager.name,
            manager.email,
            manager.id,
            manager.officeNumber
            )
            );
            console.log(employee);
        });
        
        function employeeMenu() {
            inquirer.prompt({
                type: "list",
                message: "What type of employee profile would you like to add next?",
                name: "employeeChoice",
                choices: ["Engineer", "Intern", "None"],
})
.then(function (data) {
    if (data.employeechoice === "Engineer") {
        buildEngineer();
    } else if (data.employeeChoice === "Intern") {
        buildIntern();
    } else {
        // create our html page
    }
}),
        }
