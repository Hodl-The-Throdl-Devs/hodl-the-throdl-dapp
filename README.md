Instructions on setting up test network:

- Ganache: create workspace via adding truffle project (truffle-config.js file)
- run truffle develop
- run migrate --network ganache
- make sure your metamask wallet is connected to the ganache network & you're using one of the addresses provided by the network

---

Side Notes

- We would need to supply the address for the HTT Token
- For testing HTT Token Smart Contract functions via truffle development CLI:
  - HTTToken.deployed().then((instance) => { htt = instance })
  - htt.name(); if you receive the error "Uncaught Error: Returned values aren't valid, did it run Out of Gas?..." run migrate --reset
