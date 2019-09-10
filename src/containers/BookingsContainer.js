import React from 'react';
import { connect } from "react-redux";

import Bookings from '../components/bookingComponents/Bookings';
import {fetchBookings} from '../actions/bookingActions'
import BookingForm from '../components/bookingComponents/BookingForm'

class BookingsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchBookings()
    }

    render() {
        return (
            <div className="Bookings">
                BookingsContainer
                <Bookings bookings={this.props.bookings}/>
                <BookingForm />
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        bookings: state.bookings
    }
}

export default connect(mapStateToProps, {fetchBookings})(BookingsContainer)