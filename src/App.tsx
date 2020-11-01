import React, { useState, useEffect } from 'react';
import './App.css';
import { Keyboard } from './components/Keyboard'
import { initRealKeyboard } from './utility-functions/real-keyboard'
import { Paper } from './components/Paper'



const App = React.memo(() => {
  useEffect(() => {
    console.log("USE EFFECT")
    initRealKeyboard({ onType })
  })

  const [output, setOutput] = useState<string>("")

  function onType(cell: string) {
    if (cell === "\b") {
      let updatedOutput = output?.split("")
      updatedOutput.pop()
      setOutput(updatedOutput.join(""))
    } else {
      setOutput(output + cell);
    }
  }

  return (
    <div className="App">
      <Paper braille={output} />
      <Keyboard onType={(str: string) => { onType(str) }}></Keyboard>
    </div>
  );
})

export default App;
