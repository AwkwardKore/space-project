import React, { Component } from 'react';
import '../stylesheets/App.css';
import Video from './Video';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Video />
      </div>
    );
  }
}

export default App;
