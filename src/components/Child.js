import React, { useState } from "react";

export default function Child(props) {
  console.log("childProps", props);
  var { eyes, ears, nose } = props;
  // let [eyeState , SeteyeState] = useState(eyes)
  let [localProperties, SetlocalProperties] = useState({
    eyeState: eyes,
    noseState: nose,
    earState: ears,
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
            ...localProperties,
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
