const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Init", () => {
        it("should create an object with name, email, id, and office numbe", () => {
        const manager = new Manager("name", "email", "id", "officeNumber")
        expect("name" in manager).toBe(true)
        expect("email" in manager).toBe(true)
        expect("id" in manager).toBe(true)
        expect("officeNumber" in manager).toBe(true)
        })
        it("should return a getName returns a name", () => {
            const manager = new Manager("name", "email", "id", "officeNumber")
            expect(manager.name).toBe("name")
            expect(manager.getName()).toBe("name")
        })
        it("should getEmail return an email", () => {
            const manager = new Manager("name", "email", "id", "officeNumber")
            expect(manager.email).toBe("email")
            expect(manager.getEmail()).toBe("email")
        })
        it("should getID return an ID", () => {
            const manager = new Manager("name", "email", "id", "officeNumber")
            expect(manager.id).toBe("id")
            expect(manager.getId()).toBe("id")
        })
        it("should getOfficeNumber return a room number", () => {
            const manager = new Manager("name", "email", "id", "officeNumber")
            expect(manager.officeNumber).toBe("officeNumber")
            expect(manager.getOfficeNumber()).toBe("officeNumber")
        })
    })
})
