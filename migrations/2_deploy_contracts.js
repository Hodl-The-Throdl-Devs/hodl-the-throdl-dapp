// var SimpleStorage = artifacts.require("./SimpleStorage.sol");
const HTTToken = artifacts.require("HTTToken");

module.exports = function (deployer) {
  // deployer.deploy(SimpleStorage, 1000000);
  deployer.deploy(HTTToken, 1000000);
};
