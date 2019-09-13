import React from 'react';
// import {NavLink} from 'react-router-dom'

const Service = ({service}) => {
    return (
        service ?
        <div>
            <p>Service Card:{service.attributes.name}</p>
        </div> :
        <p>No Service Found</p>
    )
}

export default Service


// This component should render when a client clicks on a link from the the services container
// It should render a New booking button. The new booking form should use the service id and the current client id to create the new booking.
// This component should show a description, price, name of the service