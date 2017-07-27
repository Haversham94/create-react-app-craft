import React, { Component } from 'react';
import VideoApp from './components/VideoApp.jsx';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the cheapest youtube version</h2>
        </div>
        <p className="App-intro">
            Enjoy using it...
        </p>
        <div className="App-container">
            <VideoApp />
        </div>
      </div>
    );
  }
}

export default App;
