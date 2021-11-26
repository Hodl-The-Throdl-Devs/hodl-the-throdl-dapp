pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/*

Current Capabilities of HTTToken:
- Has supply of 1,000,000.
- Can be transferred between accounts.

*/

contract HTTToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Hodl the Throdl Token", "HTT") {
        _mint(msg.sender, initialSupply * 10 ** decimals());
    }
}