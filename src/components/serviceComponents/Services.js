import React from 'react';
import Service from './Service';

const Services = (props) => {
    return(
        <div>
            Services Function Component
            {props.services.map(service => <li> {service.attributes.category}<Service service={service}/>  </li>)}


        </div>
    )
}
export default Services