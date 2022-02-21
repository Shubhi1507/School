import React from "react";
import { useState } from "react";
import { createContext } from "react";
import ExampleContext from "./Context";
import ContextChild1 from "./ContextChildren/ContextChild1";
import ContextChild2 from "./ContextChildren/ContextChild2";

export default function MyContextExample() {
  let [Name, SetName] = useState("");
  let [Ok, SetOk] = useState("");
  let ContextAPItest = ExampleContext.Provider; //First Class function//

  return (
    <ContextAPItest value={{ Name, SetName, Ok, SetOk }}>
      {/*To mutate the context value we pass value as well as Function/state disptacher like this */}
      <div>
        <button onClick={() => SetName("ABC")}> Change from Parent</button>
        <div>Parent</div>
        <div>{Name}</div>
        <ContextChild1 />
        <ContextChild2 />
      </div>
    </ContextAPItest>
  );
}
