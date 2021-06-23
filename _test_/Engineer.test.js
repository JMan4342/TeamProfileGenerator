const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Init", () => {
        it("should create and engineer object with name, email, id, and github", () => {
            const engineer = new Engineer("Kathy", "Kathy@email", 3, "KatM3")
            expect("name" in engineer).toBe(true)
            expect("email" in engineer).toBe(true)
            expect("id" in engineer).toBe(true)
            expect("github" in engineer).toBe(true)
        })
        it("should getName return a name", () => {
            const engineer = new Engineer("Kathy", "Kathy@email", 3, "KatM3")
            expect(engineer.name).toBe("Kathy")
            expect(engineer.getName()).toBe("Kathy")
        })
        it("should getEmail return an email", () => {
            const engineer = new Engineer("Kathy", "Kathy@email", 3, "KatM3")
            expect(engineer.email).toBe("Kathy@email")
            expect(engineer.getEmail()).toBe("Kathy@email")
        })
        it("should getID return an employee ID", () => {
            const engineer = new Engineer("Kathy", "Kathy@email", 3, "KatM3")
            expect(engineer.id).toBe(3)
            expect(engineer.getId()).toBe(3)
        })
        it("should getGithub return their GitHub profile", () => {
            const engineer = new Engineer("Kathy", "Kathy@email", 3, "KatM3")
            expect(engineer.github).toBe("KatM3")
            expect(engineer.getGithub()).toBe("KatM3")
        })
    })
})