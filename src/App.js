import React from 'react';
import './App.css';

import { Route } from 'react-router-dom';
import {connect} from 'react-redux'

import {getCurrentClient} from './actions/currentClientAction'
// import BookingsContainer from './containers/BookingsContainer';
// import ServicesContainer from './containers/ServicesContainer';
// import ClientsContainer from './containers/ClientsContainer';
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
          <Route exact path='/services/new' render={() => <ServiceForm addService={this.props.addService} />} />
          {/* <Route path='/services/:id' render={ ({ match }) => ( <Service service={this.props.services.find(s => s.id === match.params.id )} /> ) } /> */}
          {/* <Route path='/services/:id' render={routerprops => <Service services={this.props.services} {...routerprops} />} /> */}
          <Route exact path="/services/:id" render={(props) => {
            const serviceId = props.match.params.id
            const service = this.props.services.find(s => s.id === serviceId)
            console.log("The service is:", service)
            return <Service service={service} />
          }} />} />
      </div>
    );
  }
}

export default connect(null, {getCurrentClient})(App);
// This component will contain all routes
// This component will only render home and navbar
// Should this component render the containers if they do not display anything?


