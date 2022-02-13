import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";

function Loginscreen() {
  const [emailState, SetemailState] = React.useState("");
  const [passwordState, SetpasswordState] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (emailState === "" || passwordState === "") {
      return alert("Empty Fields");
    } else {
      console.log("Login successfull");
      console.log(emailState + passwordState);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your email:
          <input
          required
            type="email"
            value={emailState}
            onChange={(e) => SetemailState(e.target.value)}
          />
        </label>
        <label>
          Enter your password:
          <input
          required
          minLength={7}
            type="password"
            value={passwordState}
            onChange={(e) => SetpasswordState(e.target.value)}
          />
        </label>
        <button type="submit">Clicked</button>
      </form>
    </div>
  );
}
export default Loginscreen;
