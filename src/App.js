import React from 'react';
import './App.css';

class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/clients/1')
      .then(resp => resp.json())
      .then(data => console.log(data.data.attributes.bookings[0].day))
  }
  
  render () {
    return (
      <div className="App">
          <p>
            Welcome to Marie's Personal Trainer App
          </p>
        
      </div>
    );
  }
}

export default App;
