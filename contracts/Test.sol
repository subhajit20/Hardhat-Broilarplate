//SPDX-License-Identifier: UNLICENSED

// Solidity files have to start with this pragma.
// It will be used by the Solidity compiler to validate its version.
pragma solidity ^0.8.9;
import {Test1} from './Test1.sol';

contract Test is Test1{

    receive() external payable{}


    function add(uint256 x, uint256 y) public pure returns (uint){
        return x + y;
    }
    
    function subtract(uint256 x, uint256 y) public pure returns (uint256){
        return x - y;
    }

    function getowner() public view returns (address){
        return msg.sender;
    }
}