// import React, {Component} from 'react';

// class ApiDates extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {}
//     }

//     componentDidMount() {
//         this.fetchData();
//     }
//     fetchData() {
//         fetch('https://rest.bandsintown.com/artists/Dance%20Gavin%20Dance/events?app_id=DGD&dat' +
//                     'e=2018-02-02%2C2018-04-04')
//             .then(response => response.json())
//             .then(response => {
//                 this.setState({
//                     datetime: response.datetime
//                 })
//             })
//         }

// render(props) {
//     return (
//         <div>
//             <h1>
//                 {this.state.datetime}
//                 HELLO???
//             </h1>
//         </div>
//     );
// }
// }

// export default ApiDates;