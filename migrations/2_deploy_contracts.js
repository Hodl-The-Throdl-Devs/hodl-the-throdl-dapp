var SimpleStorage = artifacts.require("./SimpleStorage.sol");

module.exports = function (deployer) {
  deployer.deploy(SimpleStorage, 1000000);
};
