Instructions on setting up test network:

- Ganache: create workspace via adding truffle project (truffle-config.js file)
- run truffle develop
- run migrate --network ganache
- make sure your metamask wallet is connected to the ganache network & you're using one of the addresses provided by the network in order to gain ETH funds

Testing Calling Smart Contracts:

- We would need to supply the address for the HTT Token
- For testing HTT Token Smart Contract functions via truffle development CLI:
  - HTTToken.deployed().then((instance) => { htt = instance })
  - htt.name(); if you receive the error "Uncaught Error: Returned values aren't valid, did it run Out of Gas?..." run migrate --reset
- You can test other contracts similarly, you would need to replace HTTTToken and related info.

Adding HTT Token to Metamask Wallet:

- After migrating contracts to ganache, go to Ganache GUI's Transactions page
- Find transaction that has event name 'Encoded Event' & Contract 'HTTToken'. Proceed to click event
- Copy the contract address and paste to Metamark Wallet via Import Token

General Troubleshooting & Resources:

- In the case where you're testing simpleStorage and recieve error in console -> https://tinyurl.com/3rpcpymx


SIDE NOTES: CONTRACT
- Choice between ETH and HTT (Working with Eth First)
What we want it to do:
1) Exchanging token for ETH (Ex. 1 token === 0.00001 ETH)
2) Transfer ETH from 'Bank' address to user address