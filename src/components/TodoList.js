import { margin } from "@mui/system";
import React, { useState } from "react";

function TodoList() {
  let [TodoList, SetTodoList] = useState([]);
  let [List, SetList] = useState("");

  function addTodoList() {
    if (List) {
      SetList("");
      let TempArray = [...TodoList];
      TempArray.push(List);
      SetTodoList(TempArray);
      console.log(TempArray);
    } else {
    }
  }
  function removeTodoList() {
    let TempArray2 = [...TodoList];
    TempArray2.pop();
    SetTodoList(TempArray2);
    console.log(TempArray2);
  }
  function removefromList(index) {
    console.log(index);
    let TempArray3 = [...TodoList];
    TempArray3.splice(index, 1);
    SetTodoList(TempArray3);
  }

  return (
    <div>
      <div>
        <input
          required
          type={"text"}
          value={List}
          onChange={(e) => SetList(e.target.value)}
        />
      </div>
      <button onClick={addTodoList}>Add</button>
      <button onClick={removeTodoList}>Delete</button>
      <div>
        {TodoList.map((List, index) => {
          return (
            <li style={{ marginBottom: 10 }} key={List}>
              {List}
              <button onClick={() => removefromList(index)}> Remove </button>
            </li>
          );
        })}
      </div>
    </div>
  );
}
export default TodoList;
