import React from 'react';
import './App.css';
// import {connect} from 'react-redux'

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

// const mapStateToProps = (state) => {
//   return {
//     bookings: 
//   }
// }

// export default connect(mapStateToProps)(App);
export default App;
