const Engineer = require('../lib/engineer');
    
describe("Engineer", () => {
        //getRole() should return "Engineer"
    it("getRole() should return 'Engineer'", () => {
        const testValue = new Engineer(); 
        expect(testValue.getRole()).toEqual("Engineer");
    });
    //test for the GitHub username via getGitHub()
    it("test for the school name via getGitHub()", () => {
        const testValue = new Engineer("Aria", 333, "aria@test.com", "https://github.com/AriaStark"); 
        expect(testValue.getGithub()).toBe("https://github.com/AriaStark");
    });
    //test for the setting of the GitHub username via getGitHub()
    it("test for the setting of the GitHub username via getGitHub()", () => {
        const testValue = new Engineer("Aria", 333, "aria@test.com", "https://github.com/AriaStark"); 
        expect(testValue.githubUsername).toBe("https://github.com/AriaStark");
    });
});
    