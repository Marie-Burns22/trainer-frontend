import React from 'react';
import { connect } from "react-redux";
import {fetchBookings} from '../actions/bookingActions'
import Bookings from '../bookingComponents/Bookings'

class BookingsContainer extends React.Component {
    
    componentDidMount() {
        this.props.fetchBookings() 
    }
    
    render() {
        console.log("The props in bookings container are:", this.props)
        return (
            <Bookings bookings={this.props.bookings}/>    
        );
    }
}

const mapStateToProps = state => {
    return {
        bookings: state.bookings
    }
}

export default connect(mapStateToProps, {fetchBookings})(BookingsContainer)
