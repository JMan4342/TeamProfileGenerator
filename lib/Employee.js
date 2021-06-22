class Employee {
    // name
    // id
    // email
    constructor(name, email, id) {
      this.name = name;
      this.email = email;
      this.id = id;
    }
  
    // getName()
    getName() {
      return this.name;
    }
    // getEmail()
    getEmail() {
      return this.email;
    }
      // getId()
      getId() {
        return this.id;
    }
    // getRole()—returns 'Employee'
    getRole() {
      return "Employee";
    }
  }
  
  module.exports = Employee;