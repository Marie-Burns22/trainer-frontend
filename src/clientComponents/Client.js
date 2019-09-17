import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button'

const Client = (props) => {
    return (
        <div className="client">
            {props.currentClient ?
            <div>
                <h2>Welcome, {props.currentClient.attributes.name}</h2>
                {/* <NavLink to="/bookings">All My Bookings</NavLink>  */}
                <span>
                    <Button className="btn-md btn-info" as={NavLink} to="/bookings">All My Bookings</Button>
                    <Button className="btn-md btn-success" as={NavLink} to="/bookings/new">New Booking</Button>
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


// Display logout button




