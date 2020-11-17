import React from 'react';
import './App.css';
import { Keyboard } from './components/Keyboard'
import { initRealKeyboard } from './utility-functions/real-keyboard'
import { Paper } from './components/Paper'

function onType(cell: string, app: App) {
  if (cell === "\b") {
    let updatedOutput = app.state.output?.split("")
    updatedOutput.pop()
    app.setState({
      ...app.state,
      output: updatedOutput.join("")
    })
  } else {
    app.setState({
      output: app.state.output + cell
    })
  }
}

type AppState = {
  output: string
}
type AppProps = {}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)
    this.state = { output: "" }

  }
  componentDidMount() {
    initRealKeyboard({ onType: (str) => { onType(str, this) } })
  }

  render() {
    let { output } = this.state

    return (
      <div className="App">
        <Paper braille={output} />
        <Keyboard onType={(str: string) => { onType(str, this) }}></Keyboard>
      </div >
    );
  }
}

export default App;
