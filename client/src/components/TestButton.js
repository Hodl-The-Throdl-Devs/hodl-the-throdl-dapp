import React from "react";

const TestButton = (props) => {
  const { contracts, accounts } = props;

  const activateToken = async () => {
    const contract = contracts.httToken;
    const tokenSymbol = await contract.methods.symbol().call();
    console.log(tokenSymbol);
  };

  const activateSimpleStorage = async () => {
    const contract = contracts.simpleStorage;
    // Stores a given value, 5 by default.
    await contract.methods.set(5).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.get().call();

    console.log(response);
  };

  return (
    <>
      <button type="button" onClick={activateToken}>
        Test Me!
      </button>
    </>
  );
};

export default TestButton;
