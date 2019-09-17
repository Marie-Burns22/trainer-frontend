import React from 'react';
import Booking from './Booking';
import { connect } from 'react-redux'

const Bookings = (props) => {
    return(
        <div>       
        {props.bookings.length > 0 ?   
        <React.Fragment>
            <h3>Bookings for {props.clientName}</h3>
            {props.bookings.map(booking =>  <Booking booking={booking}/>)}
        </React.Fragment> 
        : 
            <p>You have no current bookings</p>
        }
        </div>
    )
}

const mapStateToProps = ({currentClient}) => {
    return {
        clientName: currentClient.attributes.name 
    }
}
export default connect(mapStateToProps)(Bookings)