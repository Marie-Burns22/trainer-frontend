import React from 'react';
import './App.css';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux'

import {getCurrentClient} from './actions/currentClientAction'
import {fetchServices} from './actions/serviceActions'

import Home from './navComponents/Home'
import NavBar from './navComponents/NavBar';

import LoginForm from './clientComponents/LoginForm';
import SignUpForm from './clientComponents/SignUpForm';

import Bookings from './bookingComponents/Bookings'
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
    console.log("In findService, this.props.services are:", this.props.services, "serviceName is:", serviceName)
    // debugger
    return services.find(service => service.attributes.name.toLowerCase() === serviceName)
  }

  render () {
    return (
      <div className="container">
          <Home />
          <NavBar />

          <Route exact path='/login' component={LoginForm}/>
          <Route exact path='/signup' component={SignUpForm}/>
          
          <Route exact path='/bookings' render={routerprops => <Bookings {...routerprops} bookings={this.props.bookings} />} />
          <Route exact path='/bookings/new' render={() => <BookingForm addBooking={this.props.addBooking} />} />

          <Route exact path='/services' render={routerprops => <Services {...routerprops} services={this.props.services} />} />
          <Route exact path='/services/new' component={ServiceForm} />
          <Route exact path="/services/:name" render={(rprops) =>  <Service {...rprops} service={this.findService(rprops.match.params.name)} /> } />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    services: state.services
  }
}

export default connect(mapStateToProps, {getCurrentClient, fetchServices})(App);
// This component will contain all routes
// This component will only render home and navbar
// Should this component render the containers if they do not display anything?


