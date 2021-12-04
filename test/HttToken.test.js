const HttToken = artifacts.require("HttToken");

contract("HttToken", (accounts) => {
  before(async () => {
    HTT = await HttToken.deployed();
  });

  it("gives the owner of the token one million tokens", async () => {
    let balance = await HTT.balanceOf(accounts[0]);
    balance = web3.utils.fromWei(balance, "ether");
    assert.equal(
      balance,
      "1000000",
      "Balance should be one million tokens for contract creator"
    );
  });

  it("can transfer tokens between accounts", async () => {
    let amount = web3.utils.toWei("1000", "ether");
    await HTT.transfer(accounts[1], amount, { from: accounts[0] });

    let balance = await HTT.balanceOf(accounts[1]);
    balance = web3.utils.fromWei(balance, "ether");
    assert.equal(
      balance,
      "1000",
      "Balance should be one thousand tokens for contract creator"
    );
  });
});
