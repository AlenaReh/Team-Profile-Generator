const Employee = require('../lib/employee');

describe("Employee", () => {
    //can instantiate Employee instance

    //test for the setting of the name via Constructor 
    it("should return the name of the employee", () => {
        expect(new Employee.getName("Alena")).toEqual("Alena");
    });

    //test for the setting of the id via Constructor

    //test for the setting of the email via Constructor

    //test for the setting of the role via Constructor
    
    //can get id via getId()

    //can get email via getEmail()

    //can get the role via getRole() and return "Employee"
});
