import React from 'react';
import {NavLink} from 'react-router-dom'

const Service = (props) => {

    // let service = props.services[props.match.params.id - 1]
    // let service = props.services.filter(service)


    return(
        <div className="container border-info">
            <NavLink to="/services">All Services</NavLink>

               <p>The Service container is rendering</p> 
            <p>{props.service.attributes.name}: {props.service.attributes.category}, Price: {props.service.attributes.price}</p>

        </div>
    )
}

export default Service