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
      message: "What type of employee profile would you like to add next?",
      name: "subordinateChoice",
      choices: ["Engineer", "Intern", "None"],
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