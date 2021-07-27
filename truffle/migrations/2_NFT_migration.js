const NFT = artifacts.require("GameItem");

module.exports = function (deployer) {
  deployer.deploy(NFT);
};
