const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, email, id, github) {
        super(name, email, id);
        this.github = github;

      }
      getGithub() {
        return this.github
      }
    // getRole()—returns 'Employee'
    getRole() {
      return "Engineer";
    }
}
  module.exports = Engineer;