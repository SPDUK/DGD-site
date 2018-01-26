import React, {Component} from 'react';

class Videos extends Component {

  render() {
    return (

      <div className="videos">
        <div className="container">
        <div className="row videotitle">
        <p>VIDEOS</p>
        </div>
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <iframe className="youtubevideo"
                width="100%"
                height="500px"
                src="https://www.youtube.com/embed/Z-aQrBZ4Duw"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen></iframe>
            </div>
            <div className="col-xs-6">
              hi
            </div>
            <div className="row"></div>
          </div>
        </div>

      </div>
    );
  }
}

export default Videos;