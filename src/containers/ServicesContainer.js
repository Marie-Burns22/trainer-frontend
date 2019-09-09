import React from 'react';
import { connect } from 'react-redux'

import ServiceForm from '../components/serviceComponents/ServiceForm';
import Services from '../components/serviceComponents/Services'
import {fetchServices} from '../actions/serviceActions'

class ServicesContainer extends React.Component {
   
    componentDidMount() {
        this.props.fetchServices()
    }
   
    render() {
        return(
            <div>
                ServicesContainer
                <ServiceForm />
                <Services services={this.props.services}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        services: state.services
    }
}

export default connect(mapStateToProps, {fetchServices})(ServicesContainer)