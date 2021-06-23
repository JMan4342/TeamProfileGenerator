const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initilization", () => {
        it("should create an object containing a name, email, and id", () => {
            // Arrange
            const employee = new Employee("name", "email", "id");
            // Act?
            // Assert
            expect("name" in employee).toBe(true);
            expect("email" in employee).toBe(true);
            expect("id" in employee).toBe(true);
        });

        it("should set the name property via the constructor arguments", () => {
            // Arrange
            const employee = new Employee("name", "email", "id");
            // Assert
            expect(employee.name).toBe("name");
        });

        it("should set the email property via the constructor arguments", () => {
            // Arrange
            const employee = new Employee("name", "email", "id");
            // Assert
            expect(employee.email).toBe("email");
        });

        it("should set the id property via the constructor arguments", () => {
            // Arrange
            const employee = new Employee("name", "email", "id");
            // Assert
            expect(employee.id).toBe("id");
        });
    });
});