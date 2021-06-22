var inquirer = require("inquirer");


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
      name: "managerOffice",
    },
    {
      type: "list",
      message: "What employee profile would you like to build next?",
      name: "subordinateChoice",
      choices: ["Engineer", "Intern"],
    },
    {
      type: "input",
      message: "Please write a short description of your project.",
      name: "description",
    },
    {
      type: "list",
      message: "What kind of license should your project have?",
      name: "license",
    },
    {
      type: "input",
      message: "What command should be run to install dependencies?",
      name: "command",
    },
    {
      type: "input",
      message: "What does the user need to know about using the repo?",
      name: "usingRepo",
    },
    {
      type: "input",
      message:
        "What does the user need to know about contributing to the repo?",
      name: "contributing",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
  ])