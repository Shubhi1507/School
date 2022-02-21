import React from "react";

function RegistrationScreen() {
  var [firstNameState, SetfirstNameState] = React.useState("");
  var [lastNameState, SetlastNameState] = React.useState("");
  var [emailState, SetemailState] = React.useState("");
  var [contactState, SetcontactState] = React.useState("");
  var [passwordState, SetpasswordState] = React.useState("");
  var [confirmPasswordState, SetconfirmPasswordState] = React.useState("");
  var [hideState, SethideState] = React.useState(false);

  function handleRegistration(event) { //event handling 
    event.preventDefault(); 
    if (
      firstNameState === "" ||
      lastNameState === "" ||
      emailState === "" ||
      contactState === "" ||
      passwordState === "" ||
      confirmPasswordState === ""
    ) {
      return alert("Empty fields");
    } else {
      if (passwordState == confirmPasswordState) {
        console.log("Success");
        console.log(
          firstNameState +
            lastNameState +
            emailState +
            contactState +
            passwordState +
            confirmPasswordState
        );
        return;
      } else {
        return alert("Password do not match ");
      }
    }
  }

  return (
    <div>
      <h1>REGISTRATION</h1>

      <form onSubmit={handleRegistration}> {/* Event handler*/}
        <div>
          <label>
            Enter your First name:
            <input
              required
              type="text"
              value={firstNameState}
              onChange={(e) => SetfirstNameState(e.target.value)} //on change
            />
          </label>
        </div>
        <div>
          <label>
            Enter your Last name:
            <input
              required
              type="text"
              value={lastNameState}
              onChange={(e) => SetlastNameState(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Enter your E-mail:
            <input
              required
              type="email"
              value={emailState}
              onChange={(e) => SetemailState(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Enter your Contact Info:
            <input
              required
              minLength={10}
              type="text"
              value={contactState}
              onChange={(e) => SetcontactState(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Enter your Password:
            <input
              required
              minLength={6}
              type={hideState ? "text" : "password"}
              value={passwordState}
              onChange={(e) => SetpasswordState(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Confirm Password:
            <input
              required
              minLength={6}
              type={hideState ? "text" : "password"}
              value={confirmPasswordState}
              onChange={(e) => SetconfirmPasswordState(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">LOG IN</button>
      </form>
      <button type="button" onClick={() => SethideState(!hideState)}>
        {hideState ? "hide" : "show"}   {/* Inline if else Conditional operator*/}
      </button>
    </div>
  );
}
export default RegistrationScreen;
