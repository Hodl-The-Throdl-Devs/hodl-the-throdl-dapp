pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract HTTToken is ERC20 {
    constructor() ERC20("Hodl the Throdl Token", "HTT") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
}