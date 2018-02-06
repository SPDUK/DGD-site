import React, {Component} from 'react';

class Footer extends Component {



  render(props) {
    return (

      <div className="Footer">
            <div>
                   <div className="row"></div>
                   <div className="col-xs-4 footergrid">
                   <a href="https://github.com/SPDUK">Website designed by SPDUK <i className="fa fa-github"></i></a>
                   </div>
                   <div className="col-xs-4 footergrid disclaimer">All product and company names are trademarks™ or registered® trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them.   -- Or something like that I don't know plz don't hurt me I just made it for fun </div>
                   <div className="col-xs-4 footergrid"><a href="https://news.bandsintown.com/home">Band tour info supplied by Bandsintown<i className="fa fa-music"></i></a></div>
            </div>
      </div>
    );
  }
}

export default Footer;