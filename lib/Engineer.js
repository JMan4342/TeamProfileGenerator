const Employee = require("./Employee");

class Engineer extends Employee {
    // name
    // id
    // email
    // github
    constructor(name, email, id, github) {
        super(name, email, id);
        this.github = github;

      // getRole()—returns 'Employee'
    getRole() {
      return "Engineer";
    }
  }
  
  module.exports = Engineer;