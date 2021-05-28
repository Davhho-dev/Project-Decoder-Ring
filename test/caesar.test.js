// Write your tests here!
const {caesar} = require("../src/caesar.js");
const expect = require("chai").expect;


describe("Caesar shift", () => {
    it("Return false if shift value is equal to 0", () => {
        const actual = caesar("Zebra Magazine", 0);
        expect(actual).to.be.false;
    });
    it("Return false if shift value is less than -25", () => {
        const actual = caesar("Zebra Magazine", -30);
        expect(actual).to.be.false;
    });
    it("Return false if shift value is greater than 25", () => {
        const actual = caesar("Zebra Magazine", 30);
        expect(actual).to.be.false;
    });
    it("Return false if no shift value present", () => {
        const actual = caesar("Zebra Magazine");
        expect(actual).to.be.false;
    });
    it("Ignores capital letters", () => {
        const expected = "bcd";
        const actual = caesar("ABC", 1);
        expect(actual).to.equal(expected);
    });
    it("Maintains spaces and symbols", () => {
        const expected = "b c d!";
        const actual = caesar("a b c!", 1);
        expect(actual).to.equal(expected);
    });
    it("Letters wrap around", () => {
        const expected = "z";
        const actual = caesar("x", 2);
        expect(actual).to.equal(expected);
    });
    it("Sentence", () => {
       const expected = "this is a secret message!";
       const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
       expect(actual).to.equal(expected);
    });
    it("encode string properly", () => {
        const expected = "wklqnixo";
        const actual = caesar("thinkful", 3);
        expect(actual).to.equal(expected);
    });
    it("encode string backwards", () => {
        const expected = "qefkhcri";
        const actual = caesar("thinkful", -3);
        expect(actual).to.equal(expected);
    })
})
