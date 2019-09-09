import React from 'react';

const Service = (props) => {
    return(
        <div>
            <li key={props.service.id}> {props.service.attributes.name}: {props.service.attributes.category}, Price: {props.service.attributes.price}</li>
        </div>
    )
}

export default Service