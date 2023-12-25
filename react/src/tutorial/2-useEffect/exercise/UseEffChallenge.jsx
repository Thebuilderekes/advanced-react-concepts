import React from "react";
import { useState } from "react";
function UseEffChallenge() {
  const [toggle, setToggle] = useState(false);

  function handleClick() {
    setToggle(!toggle);
  }
  return (
    <div>
      {toggle ? <h2>pickaboo</h2> : " "}

      <button onClick={handleClick}>toggle</button>
    </div>
  );
}

export default UseEffChallenge;
