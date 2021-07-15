const { expect } = require("chai");
describe("NFT", function() {
  it("It should deploy the contract, mint a token, and resolve to the right URI", async function() {
    const NFT = await ethers.getContractFactory("MyNFT");
    const nft = await NFT.deploy();
    const URI = "ipfs://QmWJBNeQAm9Rh4YaW8GFRnSgwa4dN889VKm9poc2DQPBkv";
    await nft.deployed();
    await nft.mint("0xA1f1004083973a0D039dC2BBfFb27B210e94B935", URI)
    expect(await nft.tokenURI(1)).to.equal(URI)
  });
});