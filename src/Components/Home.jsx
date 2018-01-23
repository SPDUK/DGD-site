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
  amazonClick = () => {
    window.open('https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=Dance+Gavin+Dance&rh=i%3Aaps%2Ck%3ADance+Gavin+Dance');
  }

  googlemusicClick = () => {
    window.open('https://play.google.com/store/music/album/Dance_Gavin_Dance_Mothership?id=By6ckn4jpjh6bpltoal2wavwrei');
  }

  itunesClick = () => {
    window.open('https://itunes.apple.com/gb/album/mothership/1138328704');
  }

  cdvinylClick = () => {
    window.open('http://merchnow.com/catalogs/dance-gavin-dance/music');
  }





  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row social-links">
            <div onClick={this.twitterClick} className="col-xs-3" id="twitter">
              <i className="fa fa-twitter" aria-hidden="true"></i>
              <p className="social-subtext">Twitter </p>
            </div>
            <div onClick={this.facebookClick} className="col-xs-3" id="facebook">
              <i className="fa fa-facebook" aria-hidden="true"></i>
              <p className="social-subtext">Facebook</p>
            </div>
            <div onClick={this.instaClick} className="col-xs-3" id="instagram">
              <i className="fa fa-instagram" aria-hidden="true"></i>
              <p className="social-subtext">Instagram</p>
            </div>
            <div onClick={this.youtubeClick} className="col-xs-3" id="youtube">
              <i className="fa fa-youtube" aria-hidden="true"></i>
                <p className="social-subtext">Youtube</p>
            </div>
          </div>
          <div className="jumbotron" id="home-jumbotron">
            <h1>Dance Gavin Dance </h1>
            <h3>Mothership out Now </h3>
            <p> <i className="fa fa-spotify"></i> Listen Now on Spotify </p>
              <div className="findus">
              Also available at ->
              </div>
            <iframe src="https://open.spotify.com/embed/album/1FSVYIieMIpJCWjucTjrao" width="300" height="80" frameborder="0" allowtransparency="true"></iframe>
          </div>
          <div  className="row social-links">
          <div onClick={this.amazonClick} className="col-xs-3" id="amazon">
            <i className="fa fa-amazon" aria-hidden="true"></i>
              <p className="social-subtext">Amazon</p>
              </div>
              <div onClick={this.googlemusicClick} className="col-xs-3" id="googlemusic">
            <i className="fa fa-google" aria-hidden="true"></i>
              <p className="social-subtext">Google Music</p>
              </div>
              <div onClick={this.itunesClick} className="col-xs-3" id="itunes">
            <i className="fa fa-apple" aria-hidden="true"></i>
              <p className="social-subtext">iTunes</p>
              </div>
              <div onClick={this.cdvinylClick} className="col-xs-3" id="cdvinyl">
            <i className="fa fa-music" aria-hidden="true"></i>
              <p className="social-subtext">CD & Vinyl</p>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
