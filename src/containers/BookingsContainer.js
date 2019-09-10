import React from 'react';
import { connect } from "react-redux";
import {Route, Switch, NavLink} from 'react-router-dom';

import BookingForm from '../components/bookingComponents/BookingForm'
import Bookings from '../components/bookingComponents/Bookings';
import Booking from '../components/bookingComponents/Booking'
import {fetchBookings} from '../actions/bookingActions'
import {addBooking} from '../actions/bookingActions'

class BookingsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchBookings()
    }

    render() {
        return (
            <div className="BookingsContainer">
                <div className="navBar">
                    <NavLink to="/bookings">All Bookings</NavLink>
                </div>
                <Switch>
                    <Route exact path='/bookings' render={routerprops => <Bookings {...routerprops} bookings={this.props.bookings} />} />
                    <Route exact path='/bookings/new' render={() => <BookingForm addBooking={this.props.addBooking} />} />
                </Switch>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        bookings: state.bookings
    }
}

export default connect(mapStateToProps, {fetchBookings, addBooking})(BookingsContainer)