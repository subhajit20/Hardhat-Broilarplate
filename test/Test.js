
var { expect } = require("chai");
const { ethers, waffle} = require("hardhat");

describe("Test contract", function () {
    it("Addition should work", async function () {
        // Create the smart contract object to test from

        /**
         * Getting all the test accounts from hardhat network
         */
        const [owner] = await ethers.getSigners();
        const TestContract = await ethers.getContractFactory("Test");

        /**
         * Deploying The Contract
         */
        const contract = await TestContract.deploy();

        /**
         * Getting the ether balance of a specific account
         */
        const balance = await contract.provider.getBalance(owner.address);
        /**
         * Calling contract functions
        */
       const additionTest = await contract.add(6, 6);
       const subtractionTest = await contract.subtract(6, 6);
       const address = await contract.getowner();
       console.log(address)
       
       const tx = {
         to: contract.address,
         value: ethers.utils.parseEther('5', 'ether')
        };

        /**
         * Sending ether to the smartcontract from the Externel Owned account
         */
        const transaction1 = await owner.sendTransaction(tx);
        const transaction2 = await owner.sendTransaction(tx);
        
        const contractbalance = await contract.provider.getBalance(contract.address);
        console.log(balance)
        console.log(contractbalance)
    });
});