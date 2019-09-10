import React from 'react';
import {NavLink} from 'react-router-dom'

const Service = (props) => {

    // let service = props.services[props.match.params.id - 1]
    // let service = props.services.filter(service)

    const service = props.services.find(s => s.id === props.match.params.id) 

// console.log("props.mathc is:", props.match, "service is:" service)
    return(
        <div className="container border-info">
            <NavLink to="/services">All Services</NavLink>

               <p>The Service container is rendering</p> 
            <p>{service.attributes.name}: {service.attributes.category}, Price: {service.attributes.price}</p>

        </div>
    )
}

export default Service