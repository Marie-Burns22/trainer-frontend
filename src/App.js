import React from 'react';
import './App.css';

import BookingsContainer from './containers/BookingsContainer';
import ServicesContainer from './containers/ServicesContainer';
import ClientsContainer from './containers/ClientsContainer';

class App extends React.Component {

  // TODO change component did mount to populate redux store. Set up react routes here or in children.
  // componentDidMount() {
  //   fetch('http://localhost:3000/api/v1/clients')
  //     .then(resp => resp.json())
  //     .then(data => console.log(data))
  // }
  
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

export default App;


