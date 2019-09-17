import React from 'react';
// import { connect } from "react-redux";
// import {NavLink} from 'react-router-dom';

import {fetchBookings} from '../actions/bookingActions'
import {addBooking} from '../actions/bookingActions'
import {getCurrentClient} from '../actions/currentClientAction'

import Bookings from '../bookingComponents/Bookings'

class BookingsContainer extends React.Component {

  
    // componentDidMount() {
    //     this.props.getCurrentClient()
    //     this.props.fetchBookings() 
    // }

    render() {
        return (
            <div className="card">
                <div>
                    <Bookings bookings={this.props.bookings} client={this.props.currentClient}/>
                </div>
            </div>
        );
    }

}

export default BookingsContainer

// const mapStateToProps = state => {
//     return {
//         bookings: state.bookings,
//         // currentClient: state.currentClient
//     }
// }

// export default connect(mapStateToProps, {fetchBookings, addBooking, getCurrentClient})(BookingsContainer)

// This container may not be necessary.  Since bookings are only from the current client, the client component may hold the logic instead?