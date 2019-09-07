import React from 'react';

const Booking = (props) => {
    return(
        <div>
            <h3> Booking Functional Component</h3>
            <p>The booking day is: {props.booking.attributes.day}</p>
        </div>
    )
}

export default Booking