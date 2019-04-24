import React from 'react';
import './App.css';
import Output from './Output';


// To share information between children, there has to be a parent to pipe state between the two

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
            onChange={this._updateInputText}
          />
          <Output
            text={this.state.inputText}
          />
        </header>
      </div>
    );
  }

  _updateInputText = (e) => {
    this.setState({
      inputText: e.target.value
    })
  }
}


export default App;
