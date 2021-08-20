const Manager = require('../lib/manager');

describe("Manager", () => {
    //getRole() should return "Manager"
    it("getRole() should return 'Manager'", () => {
       const testValue = new Manager(); 
       expect(testValue.getRole()).toEqual("Manager");
    });

    //test for the office number via getOfficeNumber()
    it("test for the office number via getOfficeNumber()", () => {
        const testValue = new Manager("Jon", 555, "test@test.com", 777); 
        expect(testValue.getOfficeNumber()).toBe(777);
    });
    //can get office number via Constructor
    it("can get office number via Constructor", () => {
        const testValue = new Manager("Jon", 555, "test@test.com", 777); 
        expect(testValue.officeNumber).toBe(777);
    });
});
