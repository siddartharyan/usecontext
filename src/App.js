import React, { useContext, useEffect, useState } from "react";
import Display from "./Display.js";
import "./styles.css";
export const State = React.createContext();
export default function App() {
  const [number, setNumber] = useState({ num: 0, name: "sid" });
  const handleClick = () => {
    setNumber((prev) => {
      return {
        num: prev["num"] + 1,
        name: prev["name"]
      };
    });
  };
  useEffect(() => {
    setNumber((prev) => {
      return {
        num: prev["num"],
        name: prev["num"] % 2 ? "sid" : "aryan"
      };
    });
  }, [number["num"]]);
  return (
    <State.Provider value={number}>
      <div className="App">
        <Display />
      </div>
      <button onClick={handleClick}>click</button>
    </State.Provider>
  );
}
