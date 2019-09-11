import React from 'react';
import {Link} from 'react-router-dom'


const Services = (props) => {
    return(
        <div>
            <h2>Available Services</h2>
        
            {props.services.map(service => 
            <li key={service.id}> 
                <Link to={`/services/${service.id}`}>{service.attributes.name}</Link>  

            </li>)}
           
        </div>
    )
}
export default Services