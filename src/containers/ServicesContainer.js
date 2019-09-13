import React from 'react';
import { connect } from 'react-redux';
import {Route, Switch, NavLink} from 'react-router-dom';

import ServiceForm from '../serviceComponents/ServiceForm';
import Services from '../serviceComponents/Services'
import Service from '../serviceComponents/Service'
import {fetchServices} from '../actions/serviceActions'
import {addService} from '../actions/serviceActions'

class ServicesContainer extends React.Component {
   
    componentDidMount() {
        this.props.fetchServices()
    }
   
    render() {
        return(
            <div className="ServicesContainer">
                <div className="navBar">
                    <NavLink to="/services">All Services</NavLink>;
                    <NavLink to="/services/new">New Service Form</NavLink>
                </div>
                <Switch>
                    <Route exact path='/services' render={routerprops => <Services {...routerprops} services={this.props.services}/> } />
                    <Route exact path='/services/new' render={() => <ServiceForm addService={this.props.addService}/> } />
                    {/* <Route path='/services/:id' render={ ({ match }) => ( <Service service={this.props.services.find(s => s.id === match.params.id )} /> ) } /> */}
                    {/* <Route path='/services/:id' render={routerprops => <Service services={this.props.services} {...routerprops} />} /> */}
                    <Route exact path="/services/:id" render={(props) => {
                        const serviceId = props.match.params.id
                        const service = this.props.services.find(s => s.id === serviceId)
                        console.log("The service is:", service)
                        return <Service service={service} />
                    }} />} />
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

// This component will fetch the services and pass them to the services component