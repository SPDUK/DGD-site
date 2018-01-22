import React, { Component } from 'react';

//Components
import Home from './components/home';
import NavigationBar from './components/navbar';
//CSS
import './styles/home.css';
import './styles/variables.css';
import './styles/navbar/navbar.css'

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavigationBar />
      <Home />
      </div>
    );
  }
}

export default App;
