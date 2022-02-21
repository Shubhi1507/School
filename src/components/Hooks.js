import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Hooks() {
  let [useClient, SetuseClient] = useState("");
  let [Name, SetName] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
  }, [Name, useClient, count]); //dependency array

  useEffect(() => {
    APIHandler();
  }, []);

  function APIHandler() {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
  function Child() {
    let [Name, SetName] = useState("Child");
    return (
      <div>
        
        {Name}
      </div>
    );
  }
  function Child2() {
    let [Name, SetName] = useState("Child2");
    return (
      <div>
        {Name}
      </div>
    );
  }

  //for initial data/ state mutation,imp API calls
  return (
    <div>
      <div>
        <input
          required
          type="text"
          value={useClient}
          onChange={(e) => SetuseClient(e.target.value)}
        />
      </div>
      {'Parent'}
      <Child/>
      <Child2/>
    </div>
  );
}
