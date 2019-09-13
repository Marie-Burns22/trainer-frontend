import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'

const Client = (props) => {
    return (
        <div className="container">
            {props.currentClient ?
            <div>
                <h2>Welcome, {props.currentClient.attributes.name}</h2>
                <NavLink to="/bookings">All My Bookings</NavLink> 
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
// Button to create a new booking
// Link to all available services
// The booking form should only render when the new booking link is rendered.
// Or...should booking form be rendered from within a service component???