import React, { Component } from 'react';
import Emailform from './components/Emailform';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Email Client</h1>
        </header>
        <Emailform />
      </div>
    );
  }
}

export default App;
