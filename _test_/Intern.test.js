const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Init", () => {
        it("should create an Intern object with name, email, id, and school", () => {
            const intern = new Intern("name", "email", "id", "school")
            expect("name" in intern).toBe(true)
            expect("email" in intern).toBe(true)
            expect("id" in intern).toBe(true)
            expect("school" in intern).toBe(true)
        })
        it("should getName return a name", () => {
            const intern = new Intern("name", "email", "id", "school")
            expect(intern.name).toBe("name")
            expect(intern.getName()).toBe("name")
        })
        it("should getEmail return an email", () => {
            const intern = new Intern("name", "email", "id", "school")
            expect(intern.email).toBe( "email")
            expect(intern.getEmail()).toBe( "email")
        })
        it("should getID return an employee ID", () => {
            const intern = new Intern("name", "email", "id", "school")
            expect(intern.id).toBe("id")
            expect(intern.getId()).toBe("id")
        })
        it("should getGithub return their GitHub profile", () => {
            const intern = new Intern("name", "email", "id", "school")
            expect(intern.school).toBe("school")
            expect(intern.getSchool()).toBe("school")
        })
    })
})