const hre = require("hardhat");
const { ethers} = require("hardhat");

async function main() {
  const [owner] = await ethers.getSigners();

  const Test = await hre.ethers.getContractFactory("Test");

  const contract1 = await Test.deploy();

  console.log(
    `Lock with 1 ETH and unlock timestamp deployed to ${contract1.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// Contract Address = 0x5FbDB2315678afecb367f032d93F642f64180aa3