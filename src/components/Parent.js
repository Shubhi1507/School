import React from "react";
import Child from "./Child";
import Child2 from "./Child2";
import ListorArray from "./ListorArray";

export default function Parent() {
  let eyes = "blue";
  let nose ="weird";
  const ears = "small"
  let body = "ok"
  let hands ="big"


  return(
<div>
<ListorArray/>
</div>

  /*<div>
    <div>
     Father
      <Child eyes ={eyes} 
      nose = {nose}
      ears ={ears}
      />
    </div>
    <div> 
    Mother
    <Child2 body ={body}
    nose = {nose}
     hands ={hands}
    />
    </div>
    </div> */
  );
}
