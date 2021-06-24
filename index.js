const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./lib/generateHTML");

const employees = [];

init();
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the team manager's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the team manager's employee ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the team manager's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the team manager's office number?",
        name: "officeNumber",
      },
    ])
    .then(function (manager) {
      employees.push(
        new Manager(
          manager.name,
          manager.email,
          manager.id,
          manager.officeNumber
        )
      );
      console.log(employees);

      // var managerProfile = document.querySelector("#managerProfile");
      // manager.name = document.createElement("h2");
      // "Manager" = document.createElement("h3");
      // manager.id = document.createElement("p");
      // manager.email = document.createElement("p");
      // manager.officeNumber = document.createElement("p");

      employeeMenu();
    });
}

// Enginner questions
function buildEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the engineer's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the engineer's employee ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the engineer's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the engineer's GitHub account?",
        name: "github",
      },
    ])
    .then(function (engineer) {
      employees.push(
        new Engineer(
          engineer.name,
          engineer.email,
          engineer.id,
          engineer.github
        )
      );
      console.log(employees);
    //   (function renderEngineer(name, email, id, github) {
    //       var engineerProfile = document.querySelector("#engineerProfile");
    //       engineerProfile = function(){
    //       name = document.createElement("h2");
    //       `"ID: " + id` = document.createElement("p");
    //       `"Email: " + email` = document.createElement("p");
    //       `"GitHub: " + github` = document.createElement("p");
    //       }
    //   });
      employeeMenu();
    });
}

//   Intern questions
function buildIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the intern's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the intern's employee ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the intern's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the intern's school?",
        name: "school",
      },
    ])
    .then(function (intern) {
      employees.push(
        new Intern(intern.name, intern.email, intern.id, intern.school)
      );
      console.log(employees);
      // (function renderIntern(name, email, id, school) {
      //     var internProfile = document.querySelector("#internProfile");
      //     name = document.createElement("h2");
      //     ("Intern") = document.createElement("h3");
      //     ("ID: " + id) = document.createElement("p");
      //     ("Email: " + email) = document.createElement("p");
      //     ("School: " + school) = document.createElement("p");
      // });
      employeeMenu();
    });
}

// Create if statements to proceed to engineer or intern questions
function employeeMenu() {
  inquirer
    .prompt({
      type: "list",
      message: "What type of employee profile would you like to add next?",
      name: "choice",
      choices: ["Engineer", "Intern", "None"],
    })
    .then(function (data) {
      if (data.choice === "Engineer") {
        buildEngineer();
      } else if (data.choice === "Intern") {
        buildIntern();
      } else {
        // create our html page
        fs.writeFile(
          "./dist/index.html",
          generateHTML(employees),
          function (err) {
            console.log("Employees:", employees);
          }
        );
      }
    });
}
