 import React from 'react'
import { useState } from 'react';


export default function UseStateComp() {
   const [counter, setCounter] = useState(0);
   const [showCounter, setShowCounter] = useState(false);
   console.log(counter)
   console.log(showCounter)
   function incCounterHandler() {
     setCounter((prevCounter) => prevCounter + 1);
     if (!showCounter) {
       setShowCounter(true);
     }
   }
   return (
     <>
       <p>Click to increment + show or hide the counter</p>
       <button onClick={incCounterHandler}>Increment</button>
       {showCounter && <p>Counter: {counter}</p>}
     </>);
 }
