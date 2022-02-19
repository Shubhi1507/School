import React, { useState } from "react";
import Button from "./Button";

export default function ListorArray() {
  let [FruitArray, SetFruitArray] = useState([]);
  let [FruitState, SetFruitState] = useState(""); // for input field

  function addFruit() {
    if (FruitState) {
      SetFruitState(""); // empties the input field
      let TempArray = [...FruitArray]; //State cannot be directly mutated , so we create a local copy and then mutate the local copy particularly for arrays and objects
      TempArray.push(FruitState); // modifying local copy of state
      SetFruitArray(TempArray);
      console.log(TempArray);
    } else {
    }
  }
  function removeFruit() {
    let TempArray2 = [...FruitArray];
    TempArray2.pop();
    SetFruitArray(TempArray2);
  }
  function removethisfruit(index) {
    console.log(index);
    let TempArray3 = [...FruitArray];
    TempArray3.splice(index, 1);
    SetFruitArray(TempArray3);
  }
  // for (let i = 0; i<4; i++) {
  //   // if (i % 2 == 0) // Modulous operator

  //     console.log(i, FruitArray[i]);
  //   }

  // for (let i = FruitArray.length-1; i >= 2; i--) {
  //   console.log(i, FruitArray[i]);
  // }

  return (
    <div>
      <div>
        <input
          required
          type="text"
          value={FruitState}
          onChange={(e) =>
            SetFruitState(e.target.value)
          } /* provides the value which user inputs*/
        />
      </div>
      <button onClick={addFruit}>Add Fruits</button>
      <button onClick={removeFruit}> Pop Fruit </button>

      <div>
        {FruitArray.map((Fruits, index) => {
          return (
            <li style={{ marginBottom: 10 }} key={Fruits}>
              {Fruits}
              <button onClick={() => removethisfruit(index)}> Remove </button>
            </li>
          );
        })}
      </div>
    </div>
  );
}
