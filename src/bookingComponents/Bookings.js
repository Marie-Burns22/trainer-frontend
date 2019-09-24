import React from 'react';
import Booking from './Booking';
import {connect} from 'react-redux'


const Bookings = (props) => {

    return(
        <div>       
        {props.bookings.length > 0 && props.client ?   
        <React.Fragment>
            <h3>Bookings for {props.client.attributes.name}</h3>
            {props.bookings.map(booking =>  <Booking key={booking.id} booking={booking}/>)}
        </React.Fragment> 
        : null
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