//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract Dweet{
    string name;
    constructor (string memory _name)public{
        name=_name;
    }
    function getName() public view returns (string memory){
        return name;
    }

    function setName(string memory _name) public{
        name=_name;
    }
}
