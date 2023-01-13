
var { expect } = require("chai");
const { ethers, waffle} = require("hardhat");

describe("Test contract", function () {
    it("Addition should work", async function () {
        // Create the smart contract object to test from

        /**
         * Getting all the test accounts from hardhat network
         */
        const [owner] = await ethers.getSigners();
        const TestContract1 = await ethers.getContractFactory("Test");
        // const TestContract2 = await ethers.getContractFactory("Test1");

        /**
         * Deploying The Contract
         * For multiple contract contract deployment will follo the same way
         */
        const contract1 = await TestContract1.deploy();
        // const contract2 = await TestContract2.deploy();

        /**
         * Getting the ether balance of a specific account
         */
        const balance1 = await contract1.provider.getBalance(owner.address);

        /**
         * Calling contract functions
        */
       const additionTest = await contract1.add(6, 6);

       const number = await contract1.dummy();

       console.log(number)
       
       const tx = {
         to: contract1.address,
         value: ethers.utils.parseEther('5', 'ether')
        };

        /**
         * Sending ether to the smartcontract from the Externel Owned account
         */
        const transaction1 = await owner.sendTransaction(tx);
        
        const contractbalance = await contract1.provider.getBalance(contract1.address);
    });
});