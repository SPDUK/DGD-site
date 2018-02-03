import React, {Component} from 'react';

class TourDates extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch('https://rest.bandsintown.com/artists/Dance%20Gavin%20Dance/events?app_id=dgdsite&date=2018-02-02%2C2019-01-01')
            .then(response => response.json())
            .then(response => {
                this.setState({
                    datetime1: response[0].datetime,
                    datetime2: response[1].datetime,
                    datetime3: response[2].datetime,
                    datetime4: response[3].datetime,
                    datetime5: response[4].datetime,
                    venuename1: response[0].venue.name,
                    venuename2: response[1].venue.name,
                    venuename3: response[2].venue.name,
                    venuename4: response[3].venue.name,
                    venuename5: response[4].venue.name,
                    city1: response[0].venue.city,
                    city2: response[1].venue.city,
                    city3: response[2].venue.city,
                    city4: response[3].venue.city,
                    city5: response[4].venue.city,
                    country1: response[0].venue.country,
                    country2: response[1].venue.country,
                    country3: response[2].venue.country,
                    country4: response[3].venue.country,
                    country5: response[4].venue.country,
                    id1: response[0].url,
                    id2: response[1].url,
                    id3: response[2].url,
                    id4: response[3].url,
                    id5: response[4].url,
                    


                })
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
                    <div className="alltours">
                        <div className="row">
                            <div className="col-xs-4 tourdates">
                            {this.state.datetime1}
                            </div>
                            <div className="col-xs-4 tourdates">
                                {this.state.venuename1} {this.state.city1} {this.state.country1}
                            </div>
                            <div className="col-xs-4 tourdates">
                                <a href={this.state.id1}>Buy Tickets</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-4 tourdates">
                            {this.state.datetime2}
                            </div>
                            <div className="col-xs-4 tourdates">
                                {this.state.venuename1} {this.state.city1} {this.state.country1}
                            </div>
                            <div className="col-xs-4 tourdates">
                                <a href={this.state.id2}>Buy Tickets</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-4 tourdates">
                            {this.state.datetime3}
                            </div>
                            <div className="col-xs-4 tourdates">
                                {this.state.venuename1} {this.state.city1} {this.state.country1}
                            </div>
                            <div className="col-xs-4 tourdates">
                                <a href={this.state.id3}>Buy Tickets</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-4 tourdates">
                            {this.state.datetime4}
                            </div>
                            <div className="col-xs-4 tourdates">
                                {this.state.venuename1} {this.state.city1} {this.state.country1}
                            </div>
                            <div className="col-xs-4 tourdates">
                                <a href={this.state.id4}>Buy Tickets</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-4 tourdates">
                            {this.state.datetime5}
                            </div>
                            <div className="col-xs-4 tourdates">
                                {this.state.venuename1} {this.state.city1} {this.state.country1}
                            </div>
                            <div className="col-xs-4 tourdates">
                                <a href={this.state.id5}>Buy Tickets</a>
                            </div>
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