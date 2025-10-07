import React from 'react'
import { useState } from 'react';
function App() {
 
  let [counter,setCounter]=useState(0);

  return (
    <>
    <h1>counter Project</h1>
    <h2>value id : {counter}</h2>
    <h3>{counter}</h3>
    <button type="submit" onClick={()=>{
    if(counter<20) setCounter(counter+1);
  }}>Increment</button>
    <button type="submit"onClick={()=>{
    if(counter>0) setCounter(counter-1);
  }}>Decrement</button>
    </>
  )
}

export default App