import React, { Component } from 'react';

//Components
import Home from './components/home';
import NavigationBar from './components/navbar';
import MerchBanner from './components/merchbanner';
import TourDates from './components/tourdates';
//CSS
import './styles/home.css';
import './styles/variables.css';
import './styles/navbar/navbar.css';
import './styles/merchbanner/merchbanner.css';
import './styles/tourdates/tourdates.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavigationBar />
      <Home />
      <MerchBanner />
      <TourDates />
      </div>
    );
  }
}

export default App;
