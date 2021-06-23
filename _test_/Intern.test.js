const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Init", () => {
        it("should create an Intern object with name, email, id, and school", () => {
            const intern = new Intern("Betty", "Betty@email", 10, "UArizona")
            expect("name" in intern).toBe(true)
            expect("email" in intern).toBe(true)
            expect("id" in intern).toBe(true)
            expect("school" in intern).toBe(true)
        })
        it("should getName return a name", () => {
            const intern = new Intern("Betty", "Betty@email", 10, "UArizona")
            expect(intern.name).toBe("Betty")
            expect(intern.getName()).toBe("Betty")
        })
        it("should getEmail return an email", () => {
            const intern = new Intern("Betty", "Betty@email", 10, "UArizona")
            expect(intern.email).toBe("Betty@email")
            expect(intern.getEmail()).toBe("Betty@email")
        })
        it("should getID return an employee ID", () => {
            const intern = new Intern("Betty", "Betty@email", 10, "UArizona")
            expect(intern.id).toBe(10)
            expect(intern.getId()).toBe(10)
        })
        it("should getGithub return their GitHub profile", () => {
            const intern = new Intern("Betty", "Betty@email", 10, "UArizona")
            expect(intern.school).toBe("UArizona")
            expect(intern.getSchool()).toBe("UArizona")
        })
    })
})