import React from "react";

export default function Practice() {
  let [okState, SetokState] = useState("");
  let [NotokState, SetNotokState] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleSubmit} />
      <div>Practice</div>
    </div>
  );
}
