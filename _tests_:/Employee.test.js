const Employee = require('../lib/employee');

describe("Employee", () => {
    //test for the setting of the name via Constructor 
    it("should return the name of the employee", () => {
        const testValue = new Employee("Alena"); 
        expect(testValue.name).toEqual("Alena");
    });

    //test for the setting of the id via Constructor
    it("test for the setting of the id via Constructor", () => {
        const testValue = new Employee("Alena", 123); 
        expect(testValue.id).toBe(123);
    });
    //test for the setting of the email via Constructor
    it("test for the setting of the email via Constructor", () => {
        const testValue = new Employee("Alena",123,"test@test.com"); 
        expect(testValue.email).toBe("test@test.com");
    });
   
    //can get id via getId()
    it("can get id via getId()", () => {
        const testValue = new Employee("Alena", 123); 
        expect(testValue.getId()).toEqual(123);
    });
    //can get email via getEmail()
    it("can get email via getEmail()", () => {
        const testValue = new Employee("Alena",123,"test@test.com"); 
        expect(testValue.getEmail()).toEqual("test@test.com");
    });
    //can get the role via getRole() and return "Employee"
    it("can get the role via getRole() and return 'Employee'", () => {
        const testValue = new Employee(); 
        expect(testValue.getRole()).toEqual("Employee");
    });
});
