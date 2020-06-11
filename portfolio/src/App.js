import React, { Component } from 'react';
import './App.css';

import Nav from './components/Nav/Nav.js';
import Carousel from './components/Carousel/Carousel.js';

class App extends Component {
  state = {
  }
 
  render () {
    return (
      <div className="App">
        <Carousel/>,
        <Nav/>
      </div>
    )
  }
}

export default App;
