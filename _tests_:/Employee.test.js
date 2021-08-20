const Employee = require('../lib/employee');

describe("Employee", () => {
    //test for the name via constructor 
    it("should return the name of the employee", () => {
        let name = "Alena";
        let result = new Employee();
        expect(result).toEqual(name);
    });

    //test for the id via Constructor

    //test for the email via Constructor

    //test for the role via constructor
});



//test example
// describe("Algo", () => {
//     describe("reverse", () => {
//       // 'reverse' should reverse "Hello World!"
//       it("should reverse a given string", () => {
//         // In order to test the function, we need to create a working example. First we define 'str'. 
//         const str = "Hello World!";
//         // Next we define 'reversed' as the value of 'str' reversed.
//         const reversed = "!dlroW olleH";
//         // We pass 'str' into '.reverse()' and set that value equal to result
//         const result = new Algo().reverse(str);
//         // We expect 'result' to equal 'reversed' if the 'reverse()' function is working correctly.
//         expect(result).toEqual(reversed);
//       });
//     });