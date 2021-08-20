const Intern = require('../lib/intern');

describe("Intern", () => {
    //getRole() should return "Intern"
   it("getRole() should return 'Intern'", () => {
       const testValue = new Intern(); 
       expect(testValue.getRole()).toBe("Intern");
   });
    //test for the school name via getSchool() 
    it("test for the school name via getSchool()", () => {
        const testValue = new Intern("Robert", 222, "test@test.com", "UofM"); 
        expect(testValue.getSchool()).toBe("UofM");
    });
    // can get the school name via Constructor
    it("can get the school name via Constructor", () => {
        const testValue = new Intern("Robert", 222, "test@test.com", "UofM"); 
        expect(testValue.school).toBe("UofM");
    });
});
