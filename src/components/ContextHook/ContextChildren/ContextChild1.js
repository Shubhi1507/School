import React from "react";
import { useState } from "react";
import { useContext } from "react";
import ExampleContext from "../Context";

export default function ContextChild1() {
  const { Name, SetName, Ok, SetOk } = useContext(ExampleContext); // Since value has name and setname as its parameter given by parent hence , we can directly obtain/destructure those particular items

  function Charger() {
    SetName("High from Child");
  }

  return (
    <div>
      <button onClick={Charger}> Change Context from Child </button>
    </div>
  );
}
