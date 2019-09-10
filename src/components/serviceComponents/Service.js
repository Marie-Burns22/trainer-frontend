import React from 'react';
// import {NavLink} from 'react-router-dom'

const Service = ({service}) => {
    return (
        service ?
        <div>
            <p>Service Card:{service.attributes.name}</p>
        </div> :
        <p>No Service Found</p>
    )
}

export default Service