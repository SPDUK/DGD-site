import React, {Component} from 'react';

class Home extends Component {

  twitterClick = () => {
    window.open('https://twitter.com/DGDtheband');
  }
    facebookClick = () => {
    window.open('https://www.facebook.com/DanceGavinDance');
  }

  instaClick = () => {
    window.open('https://www.instagram.com/dancegavindance');
  }
  youtubeClick = () => {
    window.open('https://www.youtube.com/user/riserecords/search?query=dance+gavin+dance');
  }




  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row" id="social-links">
            <div onClick={this.twitterClick} className="col-xs-3" id="twitter">
              <i className="fa fa-twitter" aria-hidden="true"></i>
              <p>Twitter </p>
            </div>
            <div onClick={this.facebookClick} className="col-xs-3" id="facebook">
              <i className="fa fa-facebook" aria-hidden="true"></i>
              <p>Facebook</p>
            </div>
            <div onClick={this.instaClick} className="col-xs-3" id="instagram">
              <i className="fa fa-instagram" aria-hidden="true"></i>
              <p>Instagram</p>
            </div>
            <div onClick={this.youtubeClick} className="col-xs-3" id="youtube">
              <i className="fa fa-youtube" aria-hidden="true"></i>
                <p>Youtube</p>
            </div>
          </div>
          <div className="jumbotron" id="home-jumbotron">
            Dance Gavin Dance
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
