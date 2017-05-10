import React, { Component } from 'react';
import logo from './logo.svg';
import './Main.css';
import Home from './pages/Home'
import './api/api.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
