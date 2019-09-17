import React from 'react';
import './App.css';

import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import {getCurrentClient} from './actions/currentClientAction'
import {fetchServices} from './actions/serviceActions'

import Home from './navComponents/Home'
import NavBar from './navComponents/NavBar';
import PhotoHeading from './navComponents/PhotoHeading'
import { Layout } from './navComponents/Layout'

import LoginForm from './clientComponents/LoginForm';
import SignUpForm from './clientComponents/SignUpForm';
import Logout from './clientComponents/Logout';

import BookingsContainer from './containers/BookingsContainer'
import BookingForm from './bookingComponents/BookingForm'

import Service from './serviceComponents/Service'
import Services from './serviceComponents/Services'
import ServiceForm from './serviceComponents/ServiceForm'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentClient()
    this.props.fetchServices()
  }
  
  findService = (serviceName) => {
    const services = this.props.services
    return services.find(service => service.attributes.name === serviceName)
  }

  render () {
    return (
      <div>
          <NavBar />
          <PhotoHeading />
          <Layout>
            <Route exact path='/' component={Home}/>

            <Route exact path='/login' component={LoginForm}/>
            <Route exact path='/signup' component={SignUpForm}/>
            <Route exact path='/logout' component={Logout}/>
            
            <Route exact path='/bookings' render={routerprops => <BookingsContainer {...routerprops} currentClient={this.props.currentClient} />} />
            <Route exact path='/bookings/new' render={routerprops => <BookingForm {...routerprops} currentClient={this.props.currentClient} />} />
          

            <Route path='/services' render={routerprops => <Services {...routerprops} services={this.props.services} />}  />
            <Route exact path='/services/new' component={ServiceForm} />
            <Route path="/services/:name" render={(rprops) =>  <Service {...rprops} service={this.findService(rprops.match.params.name)} /> } />

        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    services: state.services,
    currentClient: state.currentClient
  }
}

export default withRouter(connect(mapStateToProps, {getCurrentClient, fetchServices})(App));
// This component will contain all routes
// This component will only render home and navbar
// Should this component render the containers if they do not display anything?


