import React from 'react';
import Booking from './Booking';

const Bookings = (props) => {
    console.log("The props in Bookings.js are:", props)
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

// This component will list the bookings for the currentClient
// It will be linked to from the client component. 