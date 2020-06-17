import React, { Component } from 'react';
import './App.css';

import Nav from './components/Nav/Nav.js';
import Carousel from './components/Carousel/Carousel.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 'Home'
    }
  }
  
  setCurrentPage = nextPage => {
    this.setState({ currentPage: nextPage })
  }

  changePage = nextPage => {
    const slide = document.querySelector('.Slide')
    switch(nextPage) {
      case 'Home':
        slide.style.transform = 'translateX(0)';
        slide.style.transition = 'transform 0.5s ease-in-out';
        break;
      case 'About':
        slide.style.transform = 'translateX(-25%)';
        slide.style.transition = 'transform 0.5s ease-in-out';
        break;
      case 'Portfolio':
        slide.style.transform = 'translateX(-50%)';
        slide.style.transition = 'transform 0.5s ease-in-out';
        break;
      case 'Contact':
        slide.style.transform = 'translateX(-75%)';
        slide.style.transition = 'transform 0.5s ease-in-out';
        break;
      default:
        return;
    }
  }
 
  render () {
    return (
      <div className="App">
        <Carousel changePage={ this.changePage } setCurrentPage={ this.setCurrentPage } />,
        <Nav changePage={ this.changePage } setCurrentPage={ this.setCurrentPage } />
      </div>
    )
  }
}

export default App;
