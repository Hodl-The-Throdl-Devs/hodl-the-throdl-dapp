import React from "react";
import getWeb3 from "../getWeb3";

const TestButton = (props) => {
  const activateTest = () => {
    console.log("test successful");
  };

  return (
    <>
      <button type="button" onClick={activateTest}>
        Test Me...
      </button>
    </>
  );
};

export default TestButton;
