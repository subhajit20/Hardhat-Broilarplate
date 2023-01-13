//SPDX-License-Identifier: UNLICENSED

// Solidity files have to start with this pragma.
// It will be used by the Solidity compiler to validate its version.
pragma solidity ^0.8.9;
import {Test1} from './Test1.sol';

contract Test is Test1{

    receive() external payable{}

    event Message(string alert);

    function AddBlog(string memory blogname,string memory time) public {
        Test1.userrecord[msg.sender].push(Test1.Blog({blogname:blogname,time:time}));

        emit Message("Blog has been added...");
    }


    function getBlog(address useraddress) public view returns (Test1.Blog[] memory blogs){
        blogs = Test1.userrecord[useraddress];

        return blogs;
    }
}