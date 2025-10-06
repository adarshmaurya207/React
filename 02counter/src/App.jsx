function App() {
  let counter=0;
  const addvalue=()=>{
    counter++;
    console.log("hello");
  }
  return (
    <>
   <h1>couter Project</h1>
   <h2>counter value: {counter}</h2>
   <button id='btn1' onClick={addvalue} type="submit">counter++</button>
   <button id='btn2' type="submit">counter--</button>
   </>
  )
}

export default App
