import Keypad from "./keypad"

import './App.css'
import { useState } from "react"

function App() {


  let [input, setInput]= useState("")
  function handleClick(value)
  {
    setInput(input + value)
  }
  function calculate(value)
  {
    let outputval=eval(input)
    setInput(outputval)
  }
  function handleClear()
  {
    setInput("")

  }
  return (
    <div class="container">
      <h1>Calculator using react</h1>
      <div className="calculator">
        <input type="text" value={input} className="output" readOnly/>
        <Keypad handleClick={handleClick} handleClear={handleClear} calculate={calculate}></Keypad>
      </div>
    </div>
  )
}
export default App