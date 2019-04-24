import React from 'react';
import './App.css';
import Output from './Output';

class App extends React.Component{

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <input 
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <Output
            text="shhhh"
          />
        </header>
      </div>
    );
  }
}


export default App;
