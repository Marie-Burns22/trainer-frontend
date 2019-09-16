import React from 'react';
import Booking from './Booking';

const Bookings = (props) => {
    return(
        <div className="container">       
        {props.bookings ?   
        <React.Fragment>
            <h3>My Bookings</h3>
            {props.bookings.map(booking => <li key={booking.id}> <Booking booking={booking}/></li>)}
        </React.Fragment> 
        : 
            <p>You have no current bookings</p>
        }
        </div>
    )
}
export default Bookings