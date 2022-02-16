import React, { useState } from "react";

export default function Child(props) {
  console.log("XYZ", props);
  var { eyes, ears, nose } = props; //Destructuring of props //
  // let [eyeState , SeteyeState] = useState(eyes)
  let [localProperties, SetlocalProperties] = useState({
    eyeState: eyes,
    noseState: nose,
    earState: ears,   //useState object
  });
  return (
    <div>
      <div>
        Child has {localProperties.eyeState} eyes , Child has
        {localProperties.noseState} nose
      </div>
      <div>Child has {localProperties.earState} ears</div>
      <button
        onClick={() =>
          SetlocalProperties({
            ...localProperties,   //Spread operator//
            eyeState: "green",
            noseState: "big",
          })
        }
      >
        Change mah eyes
      </button>
      <button
        onClick={() =>
          SetlocalProperties({ ...localProperties, earState: "big" })
        }
      >
        OK Change
      </button>
    </div>
  );
}
