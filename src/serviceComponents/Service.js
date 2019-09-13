import React from 'react';
import {Link} from 'react-router-dom'

const Service = (props) => {
    return (
        <div>
        {console.log("In Service, the props are:", props)}
        {props.service ? props.service.attributes.name : null}
        {/* <p>The service name is: {props.service.attributes.name}</p> */}
            {/* <p>Service Card:{props.service.attributes.name}</p> */}
        <h3><Link to="/bookings/new">New Booking</Link> </h3>
        <h3><Link to="/bookings">All My Bookings</Link></h3>
        </div> 

    )
}

export default Service


// This component should render when a client clicks on a link from the the services container
// It should render a New booking button. The new booking form should use the service id and the current client id to create the new booking.
// This component should show a description, price, name of the service