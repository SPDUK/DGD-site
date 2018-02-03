import React, {Component} from 'react';
import TourApi from './api.jsx';

class TourDates extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


componentDidMount(){
        this.fetchData();
}
fetchData() {
    fetch('https://rest.bandsintown.com/artists/Dance%20Gavin%20Dance/events?app_id=dgdapp&date=2018-02-03%2C2019-01-01')
    .then(response => response.json())
    .then(response => {
        this.setState({
        datetime: response[0].datetime,
        venuename: response[0].venue.name,
        venuecity: response[0].venue.city,
        venuecountry: response[0].venue.country,
        url: response[0].url

        })
        console.log(response[0].venue.city)
    })
}
    render(props) {
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
                        {this.state.datetime}
                        </div>
                        <div className="col-xs-4 tourdates">
                        {this.state.venuename} 
                        {this.state.venuecity}
                        {this.state.venuecountry}
                        </div>

                        <div className="col-xs-4 tourdates">
                        <a href={this.state.url}>Buy Tickets</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-4 tourdates"></div>
                        <div className="col-xs-4 tourdates"></div>
                        <div className="col-xs-4 tourdates"></div>
                    </div>
                    <div className="row">
                        <div className="col-xs-4 tourdates"></div>
                        <div className="col-xs-4 tourdates"></div>
                        <div className="col-xs-4 tourdates"></div>
                    </div>
                    <div className="row">
                        <div className="col-xs-4 tourdates"></div>
                        <div className="col-xs-4 tourdates"></div>
                        <div className="col-xs-4 tourdates"></div>
                    </div>
                    <div className="row">
                        <div className="col-xs-4 tourdates"></div>
                        <div className="col-xs-4 tourdates"></div>
                        <div className="col-xs-4 tourdates"></div>
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