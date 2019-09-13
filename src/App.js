import React from 'react';
import './App.css';

import {connect} from 'react-redux'
import {getCurrentClient} from './actions/currentClientAction'

// import BookingsContainer from './containers/BookingsContainer';
// import ServicesContainer from './containers/ServicesContainer';
// import ClientsContainer from './containers/ClientsContainer';
import NavBar from './navComponents/NavBar';
import Home from './navComponents/Home'
import { Route, Switch } from 'react-router-dom';

import LoginForm from './clientComponents/LoginForm';
import SignUpForm from './clientComponents/SignUpForm';
import BookingForm from './bookingComponents/BookingForm'
import Bookings from './bookingComponents/Bookings'


class App extends React.Component {


  componentDidMount() {
    this.props.getCurrentClient()
  }
  
  render () {
    return (
      <div className="container">
          
          <Home />
          <NavBar />

          {/* <ClientsContainer /> */}
          {/* <ServicesContainer /> */}
          {/* <BookingsContainer /> */}
          <Switch>
            <Route exact path='/login' component={LoginForm}/>
            <Route exact path='/signup' component={SignUpForm}/>
            <Route exact path='/bookings' render={routerprops => <Bookings {...routerprops} bookings={this.props.bookings} />} />
            <Route exact path='/bookings/new' render={() => <BookingForm addBooking={this.props.addBooking} />} />
          </Switch>
      </div>
    );
  }
}

export default connect(null, {getCurrentClient})(App);
// This component will contain all routes
// This component will only render home and navbar
// Should this component render the containers if they do not display anything?


