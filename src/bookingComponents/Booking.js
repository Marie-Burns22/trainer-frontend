import React from 'react';

const Booking = (props) => {
    console.log("In bookings.js the props are:", props)
    return(
        <div>
            {props.booking ?
                <p>{props.booking.attributes.service.name}, on {props.booking.attributes.day}, at {props.booking.attributes.time}</p>
            :
            null
            }
        </div>
    )
}

export default Booking

// This component will render the details of a booking. It should show them when the client clicks on the title of the booking from the Bookings component. It should render right below the 