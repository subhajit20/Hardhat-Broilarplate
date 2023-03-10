
var { expect } = require("chai");
const { ethers, waffle} = require("hardhat");

describe("Test contract", function () {
    it("Addition should work", async function () {
        // Create the smart contract object to test from

        /**
         * Getting all the test accounts from hardhat network
         */
        const [owner,address1,address2] = await ethers.getSigners();
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
         * Can connect with another account of hardhat and interact with smart contract
        */

        const today = new Date().toLocaleDateString()+"-"+new Date().toLocaleTimeString();


        await contract1.connect(address1).AddBlog("Blog1",today);

        await contract1.connect(owner).AddBlog("Blog2",today);
        await contract1.connect(owner).AddBlog("Blog3",today);

        const blogs = await contract1.getBlog(address1.address);
        const balances = await contract1.getbalance(owner.address);
        const contract_balance = await contract1.getcontractbalance();

        /**
         * We can pass a object through the function arguement as value params
         * The function which has been made inside the contract, should be payable
         */
        const add = await contract1.connect(owner).transferbalance(address2.address,{value:ethers.utils.parseEther('5', 'ether')});
       

        /**
         * Deposite ether to the contract
         */
        const deposite = await contract1.connect(owner).depositeetherto_contract({value:ethers.utils.parseEther('5','ether')})


        /**
         * This is the another way through which we can also send ether to the contract 
         */
       const tx = {
         to: contract1.address,
         value: ethers.utils.parseEther('5', 'ether')
        };


        /**
         * Sending ether to the smartcontract from the Externel Owned account
         */
        const transaction1 = await owner.sendTransaction(tx);
        
        const contractbalance = await contract1.provider.getBalance(contract1.address);
        console.log(contractbalance)
    });
});