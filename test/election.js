const Election = artifacts.require("./Election.sol");
const assert = require('assert');

contract("Election", () => {
  it("Constructor with two candidates", () => {
    return Election.deployed().then((instance) => {
      return instance.candidatesCount();
    }).then((count) => {
      assert.equal(count,2);
    })
  });
});