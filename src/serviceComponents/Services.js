import React from 'react';
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'

const Services = (props) => {
    return(
        <div className="Services">
            <div>
                <h2>Available Services</h2>
                {props.services.map(service =>
                    <React.Fragment key={service.id}>
                        <NavLink 
                             to={`/services/${service.attributes.name}`}>
                                {service.attributes.name}
                        </NavLink>
                        <br/>
                </React.Fragment>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        services: state.services
    }
}
export default connect(mapStateToProps)(Services)

// The links should render a card that shows the service on the same page as the list of services.