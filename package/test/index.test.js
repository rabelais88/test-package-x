require("should");
const testfunction = require("../src/index");

describe("default testing", () => {
  it("hello", () => {
    const testvalue = testfunction();
    should(testvalue).equal("test message");
  });
});
