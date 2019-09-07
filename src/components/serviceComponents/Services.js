import React from 'react';
import Service from './Service';

const Services = (props) => {
    return(
        <div>
            {props.services.map(service => <li> {service.attributes.category}</li>)}
            Services

            <Service />
        </div>
    )
}
export default Services