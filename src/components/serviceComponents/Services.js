import React from 'react';
import Service from './Service';

const Services = (props) => {
    return(
        <div>
            {props.services.map(service => <li key={service.id}> {service.attributes.name}<Service service={service}/>  </li>)}


        </div>
    )
}
export default Services