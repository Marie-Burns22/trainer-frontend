import React from 'react';

const Booking = (props) => {
    return(
        <div>
            <h3> Your Booking for:  Name of Service will go here</h3>
            <p> Is on: {props.booking.attributes.day} at {props.booking.attributes.time}</p>
        </div>
    )
}

export default Booking