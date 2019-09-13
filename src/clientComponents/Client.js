import React from 'react'
import {NavLink} from 'react-router-dom'

const Client = () => {
    return (
        <div className="container">
        
            <NavLink to="/bookings">All My Bookings</NavLink> */}
        </div>
    )
}

export default Client

// This component should render when a client is logged in
// Display logout button
// Link to all bookings (in a card?)
// Button to create a new booking
// Link to all available services
// The booking form should only render when the new booking link is rendered.
// Or...should booking form be rendered from within a service component???