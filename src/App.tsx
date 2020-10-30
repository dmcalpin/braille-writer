import React, { useState } from 'react';
import './App.css';
import { Keyboard } from './components/Keyboard'
import { Paper } from './components/Paper'

function App() {
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
}

export default App;
