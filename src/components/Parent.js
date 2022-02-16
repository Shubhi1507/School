import React from "react";
import Child from "./Child";

export default function Parent() {
  let eyes = "blue";
  let nose ="weird";
  const ears = "small"


  return(
    <div>
      Parent
      <Child eyes ={eyes} 
      nose = {nose}
      ears ={ears}
      />
    </div>
  );
}
