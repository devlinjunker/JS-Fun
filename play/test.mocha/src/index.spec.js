//import assert from "assert";
import testFunc from "./index.js";
import { expect } from "chai";

/* @test {index.js} */
describe("index js", function() {
  /* @test {#testFunc()} */
  describe("#testFunc()", function() {
    /* @test {should return 2} */
    it("should return 2", function() {
      var ret = testFunc();
      expect(ret).to.equal(2);
    });
  });
});
