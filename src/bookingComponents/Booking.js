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

// This component will render the details of a booking. It should show them when the client clicks on the title of the booking from the Bookings component. It should render right below the 