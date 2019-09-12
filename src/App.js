import React from 'react';
import './App.css';

import {connect} from 'react-redux'
import {getCurrentClient} from './actions/currentClientAction'

import BookingsContainer from './containers/BookingsContainer';
import ServicesContainer from './containers/ServicesContainer';
import ClientsContainer from './containers/ClientsContainer';
import NavBar from './navComponents/NavBar';


class App extends React.Component {


  componentDidMount() {
    this.props.getCurrentClient()
  }
  
  render () {
    return (
      <div className="container">
          <h1>
            Welcome to Vegas in Miami Personal Training
          </h1>
          <NavBar />
          <ClientsContainer />
          <ServicesContainer />
          <BookingsContainer />
      </div>
    );
  }
}

export default connect(null, {getCurrentClient})(App);


