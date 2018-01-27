import React, {Component} from 'react';
import Request from 'superagent';

class TourDates extends Component {
    constructor(props) {
        super(props)
        this.state = {}


        var api = {
            getTourDates() {
                var url = 'https://rest.bandsintown.com/artists/Dance%20Gavin%20Dance/events?app_id=dgdband&date=2018-01-01%2C2018-03-03'
                return fetch(url).then((res) => res.json())
            }
        }
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
                    <div className="row">
                    <div className="col-xs-4 tourdates">
                    </div>
                    <div className="col-xs-4 tourdates">
                    </div>
                    <div className="col-xs-4 tourdates">
                    </div>                   
                    </div>
                    <div className="row">
                    <div className="col-xs-4 tourdates">
                    </div>
                    <div className="col-xs-4 tourdates">
                    </div>
                    <div className="col-xs-4 tourdates">
                    </div>                   
                    </div>
                    <div className="row">
                    <div className="col-xs-4 tourdates">
                    </div>
                    <div className="col-xs-4 tourdates">
                    </div>
                    <div className="col-xs-4 tourdates">
                    </div>                   
                    </div>
                    <div className="row">
                    <div className="col-xs-4 tourdates">
                    </div>
                    <div className="col-xs-4 tourdates">
                    </div>
                    <div className="col-xs-4 tourdates">
                    </div>                   
                    </div>
                    <div className="row">
                    <div className="col-xs-4 tourdates">
                    </div>
                    <div className="col-xs-4 tourdates">
                    </div>
                    <div className="col-xs-4 tourdates">
                    </div>                   
                    </div>
                    <div className="row">
                    <div className="col-xs-4 tourdates">
                    </div>
                    <div className="col-xs-4 tourdates">
                    </div>
                    <div className="col-xs-4 tourdates">
                    </div>                   
                    </div>
                    <div className="row">
                    <div className="col-xs-4 tourdates">
                    </div>
                    <div className="col-xs-4 tourdates">
                    </div>
                    <div className="col-xs-4 tourdates">
                    </div>                   
                    </div>
                </div>
                <div className="row jumbo-links">
                    <div id="tourshowmore" className="col-xs-12">
                        <p>
                            VIEW FULL LIST
                        </p>
                        <div></div>
                    </div>

                </div>

            </div>
        );
    }
}

export default TourDates;