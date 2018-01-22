import React, { Component } from 'react';

//Components
import Home from './Components/Home';
//CSS
import './Styles/Home.css'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Home />
      Hey!
      </div>
    );
  }
}

export default App;
