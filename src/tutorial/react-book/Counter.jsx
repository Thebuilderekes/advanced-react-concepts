import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    // the passing of a function into the updating function is best practice in react  whe dealing with variables hast are dependent on the previous state of the variable
    setCounter((prevState) => prevState + 1);
    console.log(counter);
  }

  return (
    <div>
      <h3>
        {" "}
        Counter component and useState callback function for updting previous
        state
      </h3>

      <p>{counter}</p>
      <button onClick={incrementCounter}>increase</button>
    </div>
  );
}
