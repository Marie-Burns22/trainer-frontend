import React from 'react';
import Booking from './Booking';

const Bookings = (props) => {
    return(
        <div>
            <h3>Bookings Functional Component</h3>
            {props.bookings.map(booking => <li key={booking.id}> {booking.attributes.day} <Booking booking={booking}/></li>)}
        </div>
    )
}

export default Bookings