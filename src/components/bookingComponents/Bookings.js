import React from 'react';


const Bookings = (props) => {
    return(
        <div>
            <h3>Bookings Functional Component</h3>
            {props.bookings.map(booking => <li> {booking.attributes.day}</li>)}
        </div>
    )
}

export default Bookings