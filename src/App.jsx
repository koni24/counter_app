
import { useState } from 'react';
import './App.css'

function App() {

  let [counter,setCounter] = useState(0)

  const addValue = () =>{
    if(counter<10)
      setCounter(counter+1);
  }
  const removeValue = () =>{
    if(counter > 0)
      setCounter(counter-1);
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter value:{counter}</h2>
      <button
        onClick={addValue}
      >Add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
