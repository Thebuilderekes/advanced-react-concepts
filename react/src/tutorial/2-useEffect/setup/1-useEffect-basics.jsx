import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter

const UseEffectBasics = () => {
  
const [counter, setCounter] = useState(0)
useEffect(() =>{
console.log("working")
})

function handleClick(){

const newState = setCounter(counter + 1)
return newState
}


  return ( 
    <div>
      <h2>{counter}</h2>;
      <button onClick = {handleClick} type="button">+</button>
    </div>

  )
};

export default UseEffectBasics;
