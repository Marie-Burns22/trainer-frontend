import React from 'react';
import { connect } from 'react-redux'

import ServiceInput from '../components/serviceComponents/ServiceInput';
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
                <ServiceInput />
                <Services services={this.props.services}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        services: state.services
    }
}

export default connect(mapStateToProps, {fetchServices})(ServicesContainer)