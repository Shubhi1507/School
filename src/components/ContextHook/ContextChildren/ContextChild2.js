import React from "react";
import { useContext } from "react";
import ExampleContext from "../Context";

export default function ContextChild2() {
  const { Name, SetName } = useContext(ExampleContext);
  function Mobile() {
    SetName("Hi from this side bro");
  }
  return (
    <div>
      <button onClick={Mobile}> Change Context from Child2 </button>
    </div>
  );
}
