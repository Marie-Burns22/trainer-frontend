import React from 'react';
import Booking from './Booking';
import Button from 'react-bootstrap/Button';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'


const Bookings = (props) => {
    console.log("The props in Bookings are:", props)
    return(
        <div>       
        {props.bookings.length > 0 && props.client ?   
        <React.Fragment>
            <h3>Bookings for {props.client.attributes.name}</h3>
            {props.bookings.map(booking =>  <Booking key={booking.id} booking={booking}/>)}
        </React.Fragment> 
        : 
        <React.Fragment>
                    <h4>You have no current bookings</h4> <Button as={NavLink} className="btn btn-sm btn-success" to="/bookings/new">New Booking</Button>
        </React.Fragment>
        }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        client: state.currentClient
    }
}

export default connect(mapStateToProps)(Bookings)