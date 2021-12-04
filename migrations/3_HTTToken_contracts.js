const HTTToken = artifacts.require("HTTToken");

module.exports = function (deployer) {
  deployer.deploy(HTTToken);
};