import React from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
const Services = (props) => {
    return(
        <div>
            <h2>Available Services</h2>
            {props.services.map(service => 
            <li key={service.id}> 
                <Link to={`/services/${service.attributes.name}`}>{service.attributes.name}</Link>  
            </li>)}
           
        </div>
    )
}

const mapStateToProps = state => {
    return {
        services: state.services
    }
}
export default connect(mapStateToProps)(Services)

// The links should render a card that shows the service on the same page as the list of services.