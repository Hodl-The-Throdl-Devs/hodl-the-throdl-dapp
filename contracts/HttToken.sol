pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract HTTToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Hodl the Throdl Token", "HTT") {
        _mint(msg.sender, initialSupply * 10 ** decimals());
    }
}