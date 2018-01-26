import React, { Component } from 'react';

//Components
import Home from './components/home';
import NavigationBar from './components/navbar';
import MerchBanner from './components/merchbanner';
import TourDates from './components/tourdates';
import Videos from './components/videos';
//CSS
import './styles/home.css';
import './styles/variables.css';
import './styles/navbar/navbar.css';
import './styles/merchbanner/merchbanner.css';
import './styles/tourdates/tourdates.css';
import './styles/videos/videos.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavigationBar />
      <Home />
      <MerchBanner />
      <TourDates />
      <Videos />
      </div>
    );
  }
}

export default App;
