const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initilization", () => {
        it("should create an object containing a name, email, and id", () => {
            // Arrange
            const employee = new Employee("Nick", "n@2u.com", 1);
            // Act?
            // Assert
            expect("name" in employee).toBe(true);
            expect("email" in employee).toBe(true);
            expect("id" in employee).toBe(true);
        });

        it("should set the name property via the constructor arguments", () => {
            // Arrange
            const employee = new Employee("Nick", "n@2u.com", 1);
            // Assert
            expect(employee.name).toBe("Nick");
        });

        it("should set the email property via the constructor arguments", () => {
            // Arrange
            const employee = new Employee("Nick", "n@2u.com", 1);
            // Assert
            expect(employee.email).toBe("n@2u.com");
        });

        it("should set the id property via the constructor arguments", () => {
            // Arrange
            const employee = new Employee("Nick", "n@2u.com", 1);
            // Assert
            expect(employee.id).toBe(1);
        });
    });
});