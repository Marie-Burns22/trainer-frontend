import React from 'react';
import { connect } from 'react-redux';
import {Route, Switch} from 'react-router-dom';

import ServiceForm from '../components/serviceComponents/ServiceForm';
import Services from '../components/serviceComponents/Services'
import {fetchServices} from '../actions/serviceActions'
import {addService} from '../actions/serviceActions'
import Service from '../components/serviceComponents/Service'


class ServicesContainer extends React.Component {
   
    componentDidMount() {
        this.props.fetchServices()
    }
   
    render() {
        return(
            <div className="ServicesContainer">
                
                <Switch>
                    <Route exact path='/services' render={routerprops => <Services {...routerprops} services={this.props.services}/> } />
                    <Route exact path='/services/new' render={() => <ServiceForm addService={this.props.addService}/> } />
                    {/* <Route path='/services/:id' component={Service} /> */}
                    <Route path='/services/:id' render={ ({ match }) => ( <Service service={this.props.services.find(s => s.id === match.params.id )} /> ) } />
                </Switch>   


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