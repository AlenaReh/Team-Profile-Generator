const Engineer = require('../lib/engineer');
   
    //test for the GitHub username via getGitHub()
    //can get GitHub via Constructor via getSchool();
    
    describe("Engineer", () => {
         //getRole() should return "Engineer"
        it("getRole() should return 'Engineer'", () => {
            const testValue = new Engineer(); 
            expect(testValue.getRole()).toEqual("Engineer");
        });
    
    
    });
    