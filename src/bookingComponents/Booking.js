import React from 'react';
import {connect} from 'react-redux'
import Button from 'react-bootstrap/Button'
import {deleteBooking} from '../actions/bookingActions'

const Booking = (props) => {
console.log(props)
    const deleteBooking = () => {
        props.deleteBooking(props.clientId, props.booking.id)
    }

    return(
        <div className="card">
            {props.booking.attributes.service ?
                <p>{props.booking.attributes.service.name}, on {props.booking.attributes.day}, at {props.booking.attributes.time}</p>
            :
            <p>The service you booked has been canceled. Please contact your teacher to reschedule</p>
            }
            <Button
                onClick={deleteBooking}
                className="btn btn-sm btn-warning">Delete booking</Button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        clientId: state.currentClient.id
    }
}

export default connect(mapStateToProps, {deleteBooking})(Booking)