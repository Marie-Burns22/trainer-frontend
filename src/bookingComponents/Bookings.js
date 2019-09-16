import React from 'react';
import Booking from './Booking';

const Bookings = (props) => {
    console.log(props.bookings)
    return(
        <div className="container">       
        {props.bookings.length > 0 ?   
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