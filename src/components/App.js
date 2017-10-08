import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import MovieInformation from './MovieInformation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieInformation />
      </div>
    );
  }
}

export default App;
