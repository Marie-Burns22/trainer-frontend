import React from 'react';
import { connect } from "react-redux";
import Bookings from '../components/bookingComponents/Bookings';

class BookingsContainer extends React.Component {

    // Add componentDidMount after fetchBookings is built in action and reducer

    render() {
        return (
            <div className="Bookings">
                BookingsContainer
                <Bookings />
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        bookings: state.bookings
    }
}
// TODO add action to connect after it is built in action and reducer
export default connect(mapStateToProps)(BookingsContainer)