import React, {Component} from 'react';

class Home extends Component {


clickTwitter = () => {
  window.location = "https://twitter.com/DGDtheband";
}

  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row" id="social-links">
            <div onClick={this.clickTwitter} className="col-xs-3" id="twitter">
              <i class="fa fa-twitter" aria-hidden="true"></i>
              <p>Twitter</p>
            </div>
            <div className="col-xs-3" id="facebook">
              <i class="fa fa-facebook" aria-hidden="true"></i>
              <p>Facebook</p>
            </div>
            <div className="col-xs-3" id="instagram">
              <i class="fa fa-instagram" aria-hidden="true"></i>
              <p>Instagram</p>
            </div>
            <div className="col-xs-3" id="youtube">
              <i class="fa fa-youtube" aria-hidden="true"></i>
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
