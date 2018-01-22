import React, { Component } from 'react';

//Components
import Home from './components/home';
import Nav from './components/navbar';
//CSS
import './styles/home.css';
import './styles/variables.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav />
      <Home />
      </div>
    );
  }
}

export default App;
