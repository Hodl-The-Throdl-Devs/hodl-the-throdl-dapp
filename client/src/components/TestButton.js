import React from "react";
import getWeb3 from "../getWeb3";

const TestButton = (props) => {
  const { contracts, accounts } = props;

  const activateToken = () => {
    console.log("test successful");
  };

  const activateSimpleStorage = async () => {
    // Stores a given value, 5 by default.
    await contracts.methods.set(5).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await contracts.methods.get().call();

    console.log(response);
  };

  return (
    <>
      <button type="button" onClick={activateSimpleStorage}>
        Test Me...
      </button>
    </>
  );
};

export default TestButton;
