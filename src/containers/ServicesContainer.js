import React from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';

// import ServiceForm from '../serviceComponents/ServiceForm';
// import Services from '../serviceComponents/Services'
// import Service from '../serviceComponents/Service'
import {fetchServices} from '../actions/serviceActions'
import {addService} from '../actions/serviceActions'

class ServicesContainer extends React.Component {
   
    // componentDidMount() {
    //     this.props.fetchServices()
    // }
   
    render() {
        return(
            <div className="ServicesContainer">
                <div>
                    <NavLink to="/services/new">New Service Form</NavLink>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        services: state.services
    }
}

export default connect(mapStateToProps, {fetchServices, addService})(ServicesContainer)

// This component will fetch the services and pass them to the services component