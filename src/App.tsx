import React, { useState } from 'react';
import './App.css';
import { Keyboard } from './components/Keyboard'
import { Paper } from './components/Paper'

function App() {
  const [output, setOutput] = useState<string>("")
  return (
    <div className="App">
      <Paper>{output}</Paper>
      <Keyboard onType={(str: string) => { setOutput(output + str); console.log(str) }}></Keyboard>
    </div>
  );
}

export default App;
