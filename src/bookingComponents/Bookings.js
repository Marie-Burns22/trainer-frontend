import React from 'react';
import Booking from './Booking';

const Bookings = (props) => {
    return(
        <div className="container">          
        <h3>My Bookings</h3>
            {props.bookings.map(booking => <li key={booking.id}> {booking.attributes.day} <Booking booking={booking}/></li>)}
        </div>
    )
}

export default Bookings

// This component will list the bookings for the currentClient
// It will be linked to from the client component. 