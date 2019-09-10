import React from 'react';
import {Route, Link} from 'react-router-dom'
import Service from './Service';

const Services = (props) => {
    return(
        <div>
            <h2>Available Services</h2>
            {props.services.map(service => 
            <li key={service.id}> 
                <Link to={`/services/${service.id}`}>{service.attributes.name}</Link>  
                <Route path='/services/:id' render={() => <Service service={service} />} /> 
            </li>)}
           
        </div>
    )
}
export default Services