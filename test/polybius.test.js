// Write your tests here!
const {polybius} = require("../src/polybius.js");
const expect = require("chai").expect;


describe("Polybius Square", () => {
    it("translate the letters i to 42, when encoding", () => {
        const expected = "42";
        const actual = polybius("i");
        expect(actual).to.equal(expected);
    });
    it("translate the letter j to 42, when encoding", () => {
        const expected = "42";
        const actual = polybius("j");
        expect(actual).to.equal(expected);
    });
    it("translate 42 to (i/j)", () => {
        const expected = "(i/j)";
        const actual = polybius("42", false);
        expect(actual).to.equal(expected);
    });
    it("ignores capital letters", () => {
        const expected = polybius("hello");
        const actual = polybius("HELLO");
        expect(actual).to.equal(expected);
    })
    it("maintains space", () => {
        const expected = "dav(i/j)d ho test";
        const actual = polybius("4111154241 3243 44513444", false);
        expect(actual).to.equal(expected);
    })
})
