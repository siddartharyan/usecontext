import React, { useContext } from "react";
import { State } from "./App";
const Display = () => {
  const number = useContext(State);
  return (
    <>
      <div>
        the value is {number["num"]} and {number["name"]}
      </div>
    </>
  );
};
export default Display;
