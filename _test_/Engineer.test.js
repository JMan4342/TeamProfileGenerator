const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Init", () => {
        it("should create and engineer object with name, email, id, and github", () => {
            const engineer = new Engineer("name", "email", "id", "github")
            expect("name" in engineer).toBe(true)
            expect("email" in engineer).toBe(true)
            expect("id" in engineer).toBe(true)
            expect("github" in engineer).toBe(true)
        })
        it("should getName return a name", () => {
            const engineer = new Engineer("name", "email", "id", "github")
            expect(engineer.name).toBe("name")
            expect(engineer.getName()).toBe("name")
        })
        it("should getEmail return an email", () => {
            const engineer = new Engineer("name", "email", "id", "github")
            expect(engineer.email).toBe("email")
            expect(engineer.getEmail()).toBe("email")
        })
        it("should getID return an employee ID", () => {
            const engineer = new Engineer("name", "email", "id", "github")
            expect(engineer.id).toBe("id")
            expect(engineer.getId()).toBe("id")
        })
        it("should getGithub return their GitHub profile", () => {
            const engineer = new Engineer("name", "email", "id", "github")
            expect(engineer.github).toBe("github")
            expect(engineer.getGithub()).toBe("github")
        })
    })
})