import React from 'react';

const Service = (props) => {
    return(
        <div>
            <h3>Service Functional Component</h3>
            <p>The service name is: {props.service.attributes.name}</p>
        </div>
    )
}

export default Service