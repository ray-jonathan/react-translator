import React from 'react';
import './App.css';
import Output from './Output';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      inputText: ''
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <input 
            onChange={(e) => {
              this.setState({
                inputText: e.target.value
              })
            }}
          />
          <Output
            text={this.state.inputText}
          />
        </header>
      </div>
    );
  }
}


export default App;
