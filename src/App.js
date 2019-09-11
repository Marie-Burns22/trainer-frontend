import React from 'react';
import './App.css';

import {connect} from 'react-redux'
import {getCurrentClient} from './actions/currentClientAction'

import BookingsContainer from './containers/BookingsContainer';
import ServicesContainer from './containers/ServicesContainer';
import ClientsContainer from './containers/ClientsContainer';

class App extends React.Component {


  componentDidMount() {
    this.props.getCurrentClient()
  }
  
  render () {
    return (
      <div className="App">
          <p>
            Welcome to Marie's Personal Trainer App
          </p>
          <ClientsContainer />
          <ServicesContainer />
          <BookingsContainer />
        
      </div>
    );
  }
}

export default connect(null, {getCurrentClient})(App);


