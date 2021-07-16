const hre = require("hardhat");
async function main() {
  const NFT = await hre.ethers.getContractFactory("MyNFT");
  const URI = "ipfs://QmQ3ayz3G45ztZR3L2s2Vjfcy9CmYr1kKpQmhhkXWYafDs "
  const WALLET_ADDRESS = "0xA1f1004083973a0D039dC2BBfFb27B210e94B935"
  const CONTRACT_ADDRESS = "0xD5dC2CbfDe4c0B587870EC7aA040c9551228Be23"
  const contract = NFT.attach(CONTRACT_ADDRESS);
  await contract.mint(WALLET_ADDRESS, URI);
  console.log("NFT minted:", contract);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});