import React from 'react';
import Service from './Service';

const Services = (props) => {
    return(
        <div>
            {props.services.map(service => <div key={service.id}> <Service service={service}/>  </div>)}
        </div>
    )
}
export default Services