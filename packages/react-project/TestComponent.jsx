import React from "react";

const TestComponent = () => (
  <div>
    <p>Test Component</p>
    <img src={require("./arrow-down.png").default} width="10px" height="10px" />
  </div>
);

export default TestComponent;
