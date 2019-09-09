import React from 'react';

const Service = (props) => {
    return(
        <div>
            <li key={props.service.id}>Category: {props.service.attributes.category} Price: {props.service.attributes.price}</li>
        </div>
    )
}

export default Service