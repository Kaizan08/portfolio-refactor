import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is the App main page from the router.</h1>
        <p>Followed by a random picture of this guy!</p>
        <img src="./Michael_Jordan_in_2014.jpg" alt="GOAT"/>
      </div>
    );
  }
}

export default App;
