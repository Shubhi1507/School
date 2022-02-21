import React from "react";

export default function Button() {
  const [idState, SetidState] = React.useState(0);

  function XYZ(abc) {
    console.log("Okay", abc);
  }
  function APIHandler(id) {
    if (idState >0) {
      fetch("https://jsonplaceholder.typicode.com/users/"+ idState) // callback 
        .then((response) => response.json())
        .then((json) => console.log(json));
    } else {
      console.log("not reqd");
    }
  }

  return (
    <div>
  <button onClick={() => XYZ("Shubhi")}> Click</button> {/* Fat arrow functions */}
      <button onClick={() => APIHandler("2")}> API</button>
      <button onClick={() => SetidState(idState + 1)}>++</button>
      <button onClick={() => SetidState(idState - 1)}>--</button>
      <p>{idState > -1 ? idState : "not required"}</p> {/* Conditional Rendering*/}
      </div>
  );
}
