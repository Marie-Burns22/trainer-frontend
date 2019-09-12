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
          </Switch>
      </div>
    );
  }
}

export default connect(null, {getCurrentClient})(App);


