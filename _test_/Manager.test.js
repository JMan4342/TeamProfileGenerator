const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Init", () => {
        it("should create an object with name, email, id, and office numbe", () => {
        const manager = new Manager("John", "you@email", 2, 111)
        expect("name" in manager).toBe(true)
        expect("email" in manager).toBe(true)
        expect("id" in manager).toBe(true)
        expect("officeNumber" in manager).toBe(true)
        })
        it("should return a getName returns a name", () => {
            const manager = new Manager("John", "you@email", 2, 111)
            expect(manager.name).toBe("John")
            expect(manager.getName()).toBe("John")
        })
        it("should getEmail return an email", () => {
            const manager = new Manager("John", "you@email", 2, 111)
            expect(manager.email).toBe("you@email")
            expect(manager.getEmail()).toBe("you@email")
        })
        it("should getID return an ID", () => {
            const manager = new Manager("John", "you@email", 2, 111)
            expect(manager.id).toBe(2)
            expect(manager.getId()).toBe(2)
        })
        it("should getOfficeNumber return a room number", () => {
            const manager = new Manager("John", "you@email", 2, 111)
            expect(manager.officeNumber).toBe(111)
            expect(manager.getOfficeNumber()).toBe(111)
        })
    })
})
