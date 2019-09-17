import React from 'react';
import Booking from './Booking';
// import { connect } from 'react-redux'

const Bookings = (props) => {
    console.log("The props in Bookings are:", props)
    return(
        <div>       
        {props.bookings.length > 0 ?   
        <React.Fragment>
            <h3>Bookings for {props.client.attributes.name}</h3>
            {props.bookings.map(booking =>  <Booking booking={booking}/>)}
        </React.Fragment> 
        : 
        <h4>You have no current bookings</h4>
        }
        </div>
    )
}

// const mapStateToProps = ({currentClient}) => {
//     return {
//         clientName: currentClient.attributes.name 
//     }
// }
// export default connect(mapStateToProps)(Bookings)
export default Bookings