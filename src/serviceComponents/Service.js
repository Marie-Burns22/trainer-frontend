import React from 'react';
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container'

const Service = (props) => {

    return (
        <Container>
            {console.log("In Service, the props are:", props)}
            {props.service ? 
                <div>
                    <h3>Service: {props.service.attributes.name}</h3>
                    <h4>Category: {props.service.attributes.category}</h4>
                    <h4>Price: ${props.service.attributes.price}</h4>
                </div>
            : null}
            <Link to="/bookings/new">New Booking</Link>
        </Container> 
    )
}

export default Service


// This component should render when a client clicks on a link from the the services container
// It should render a New booking button. The new booking form should use the service id and the current client id to create the new booking.
// This component should show a description, price, name of the service