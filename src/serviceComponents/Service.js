import React from 'react';
import {NavLink} from 'react-router-dom'
import {deleteService} from '../actions/serviceActions'
import {connect} from 'react-redux'
import Button from "react-bootstrap/Button"

const Service = (props) => {

    const deleteService = () => {
        props.deleteService(props.service.id, props.history)
    }
 
    return (
        <div className="card">
            {props.service 
            ? 
                <React.Fragment>
                    <h3>Service: {props.service.attributes.name}</h3>
                    <h4>Category: {props.service.attributes.category}</h4>
                    <h4>Price: ${props.service.attributes.price}</h4>
                    <Button as={NavLink} className="btn btn-sm btn-success" to="/bookings/new">New Booking</Button>
                    <Button
                        onClick={deleteService}
                        className="btn btn-sm btn-warning">Delete {props.service.attributes.name}</Button>
                </React.Fragment>
            : 
            null}
       
        </div>
    )
}

export default connect(null, {deleteService})(Service)


// This component should render when a client clicks on a link from the the services container
// It should render a New booking button. The new booking form should use the service id and the current client id to create the new booking.
// This component should show a description, price, name of the service