import React from 'react';

const Service = (props) => {
    return(
        <div>
            Service Functional Component
            <p>{props.service.attributes.name}</p>
        </div>
    )
}

export default Service