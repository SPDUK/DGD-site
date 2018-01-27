import React, {Component} from 'react';

class Videos extends Component {

  render() {
    return (

      <div className="videos">
        <div className="container">
          <div className="row videotitle">
          <div className="col-xs-12">
            <p>VIDEOS</p>
            </div>
            </div>
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <iframe
                className="youtubevideo"
                width="100%"
                height="500px"
                src="https://www.youtube.com/embed/Z-aQrBZ4Duw"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen></iframe>
            </div>
            <div className=" col-xs-12 col-md-6">
              <iframe
              className="youtubevideo"
                width="100%"
                height="500px"
                src="https://www.youtube.com/embed/7-9_8QFxjwI"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen></iframe>
            </div>
            <div className="row">
          </div>
          <div className="row videomore">
          <div className="col-xs-12">
            <p>More Available on Youtube <i className="fa fa-youtube"></i></p>
            </div>
          </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Videos;