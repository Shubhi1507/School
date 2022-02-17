import React, { useState } from "react";

export default function Child2(props) {
  console.log("ABC", props);
  var { body, nose, hands } = props;
  let [localProperties, SetlocalProperties] = useState({
    bodyState: body,
    noseState: nose,
    handsState: hands,
  });

  return (
    <div>
      <div>
        {" "}
        Child2 has {localProperties.bodyState} body ,{" "}
        {localProperties.noseState} nose and {localProperties.handsState} hands
        <div>
          <button
            onClick={() =>
              SetlocalProperties({ ...localProperties, handsState: "small " })
            }
          >
            Tap to change{" "}
          </button>
        </div>
        <button
          onClick={() =>
            SetlocalProperties({ ...localProperties, bodyState: "not ok " })
          }
        >
          
          Change type
        </button>
      </div>
    </div>
  );
}
