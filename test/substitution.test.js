// Write your tests here!
const {substitution} = require("../src/substitution.js");
const expect = require("chai").expect;

describe("substition cipher", () => {
    it("Ignores capital letters", () => {
        const expected = substitution("Thinkful", "xoyqmcgrukswaflnthdjpzibev");
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });
    it("Maintains space", () => {
        const expected = "elp xhm xf mbymwwmfj dne";
        const actual = substitution("you are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });
    it("Returns false if given alphabet isn't 26 characters long", () => {
        const actual = substitution("thinkful", "abc");
        expect(actual).to.be.false;
    });
    it("Returns false if there are duplicate values", () => {
        const actual = substitution("thinkful", "abdefghijklmnopqrstuvwxyy");
        expect(actual).to.be.false;
    });
    it("Correctly translates given phrase", () => {
        const expected = "david ho test";
        const actual = substitution("qxzuq rl jmdj", "xoyqmcgrukswaflnthdjpzibev", false);
    });
});