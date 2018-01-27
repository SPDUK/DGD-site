import React, {Component} from 'react';
import Request from 'superagent';



class TourDates extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentWillMount(){
        var url="https://rest.bandsintown.com/artists/Dance%20Gavin%20Dance/events?app_id=dgdsite&date=2018-01-01%2C2018-03-03"
        Request.get(url).then((response) => {
            this.setState({
                venue: response.id
            });
        });
}

    render() {
        return (
            <div className="container">
                <div className="row jumbo-links">
                    <div id="tourtitle" className="col-xs-12">
                        <p>
                            TOUR DATES
                        </p>
                    </div>
                </div>
                <div className="jumbotron tour-jumbo">
                <script charSet="utf-8" src="https://widget.bandsintown.com/main.min.js"></script><a className="bit-widget-initializer" data-artist-name="Swans" data-display-local-dates="false" data-display-past-dates="true" data-auto-style="false" data-text-color="#000000" data-link-color="#2F95DE" data-popup-background-color="#FFFFFF" data-background-color="#FFFFFF" data-display-limit="15" data-link-text-color="#FFFFFF"></a>
                    <div>
                    </div>
                </div>
                <div className="row jumbo-links">
                    <div id="tourshowmore" className="col-xs-12">
                       <p> 
                            VIEW FULL LIST
                       </p>
                    <div>

                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default TourDates;