// @ts-ignore
import { ethers } from "hardhat";

async function main() {
  const Trial = await ethers.getContractFactory("UnexpectedTest");
  const trial = await Trial.deploy();
  // await trial.deployed();

  const mint = await trial.safeMint(
    "0xCb3416Fc84c0e9f72F169DD8e53dBc06220591BF",
    "IPFS://QmU92jDaKwdrtUv7LYRoMYJ6JXi41kiJgwD2CcZffgABUU"
  );
  console.log(mint);

  // This is my link address:https://testnets.opensea.io/assets/rinkeby/0x9e74d93132e29136fd06f3a5aa569be0ddcd84d2/1
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
