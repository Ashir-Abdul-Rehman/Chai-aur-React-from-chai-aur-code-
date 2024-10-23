import { useState } from 'react'
import './App.css'

function App() {
    let [value, setvalue] = useState(0)
    function addvalue(){
      setvalue(value + 1)
  }

  function removevalue(){
    setvalue(value - 1)
  }

  function resetvalue(){
    setvalue(0)
  }

  return (
    <>
      <h1>Counter app with react</h1>
      <br />
      <br />
      <h2>Count: {value}</h2>
      <br />
      <button onClick={addvalue}>Increment</button>
      <br />
      <br />
      <button onClick={removevalue}>Decrement</button>
      <br />
      <br />
      <button onClick={resetvalue}>Reset</button>
    </>
  )
}

export default App
