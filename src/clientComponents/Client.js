import React from 'react'
import {NavLink} from 'react-router-dom'

const Client = () => {
    return (
        <div className="container">
            <NavLink to="/bookings/new">New Booking</NavLink>
            <NavLink to="/bookings">All My Bookings</NavLink>
        </div>
    )
}

export default Client