import React from 'react';
import { connect } from "react-redux";
import {Route, Switch, NavLink} from 'react-router-dom';

import BookingForm from '../bookingComponents/BookingForm'
import Bookings from '../bookingComponents/Bookings';
// import Booking from '../bookingComponents/Booking'
import {fetchBookings} from '../actions/bookingActions'
import {addBooking} from '../actions/bookingActions'

class BookingsContainer extends React.Component {

    // componentDidMount commented out to avoid automatic alert everytime page loads.
    // TODO: fetchBookings only when asked for by currentclient clicking on a button to see all their bookings. I think that means it goes inthe bookings component
    // fetchBookings requires currentClient.id to be passed in
    // componentDidMount() {
        // this.props.fetchBookings() 
    // }

    render() {
        return (
            <div className="BookingsContainer">
                <div className="navBar">
                    <h3><NavLink to="/bookings/new">New Booking</NavLink> </h3>
                    <h3><NavLink to="/bookings">All My Bookings</NavLink></h3>
                </div>
                <Switch>
                    {/* <Route exact path='/bookings' render={routerprops => <Bookings {...routerprops} bookings={this.props.bookings} />} />
                    <Route exact path='/bookings/new' render={() => <BookingForm addBooking={this.props.addBooking} />} /> */}
                </Switch>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        bookings: state.bookings
        currentClient: state.currentClient
    }
}

export default connect(mapStateToProps, {fetchBookings, addBooking})(BookingsContainer)

// This container may not be necessary.  Since bookings are only from the current client, the client component may hold the logic instead?