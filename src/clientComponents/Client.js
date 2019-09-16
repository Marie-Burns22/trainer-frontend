import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button'

const Client = (props) => {
    return (
        <div className="container">
            {props.currentClient ?
            <div>
                <h2>Welcome, {props.currentClient.attributes.name}</h2>
                {/* <NavLink to="/bookings">All My Bookings</NavLink>  */}
                <span>
                    <Button className="btn-md btn-info" href="/bookings">All My Bookings</Button>
                    <Button className="btn-md btn-success" href="/bookings/new">New Booking</Button>
                </span>
            </div>
                : null
            }  
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentClient: state.currentClient
    }
}

export default connect(mapStateToProps)(Client)

// This component should render when a client is logged in
// Display logout button
// Link to all bookings (in a card?)
// NavLink to all my bookings should not render after it is clicked
// Button to create a new booking
// Link to all available services
// The booking form should only render when the new booking link is rendered.
// Or...should booking form be rendered from within a service component???