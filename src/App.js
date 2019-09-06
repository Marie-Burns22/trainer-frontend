import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
// import {connect} from 'react-redux'


class App extends React.Component {

  // TODO change component did mount to populate redux store. Set up react routes here or in children.
  componentDidMount() {
    fetch('http://localhost:3000/api/v1/clients/1')
      .then(resp => resp.json())
      .then(data => console.log(data))
  }
  


  render () {
    return (
      <div className="App">
          <p>
            Welcome to Marie's Personal Trainer App
          </p>
          <LoginForm />
        
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


//From react auth using session video:

// componentDidMount() {
//   const token = localStorage.getItem("token")
//   if (token) {
//     fetch("http://localhost:3000/get_current_user", {
//       credentials: "include",
//       headers: {
//         "Content-Type": "application/json"
//       }
//     })
//     .then(r => r.json())
//     .then(resp => {
//       if (resp.error) {
//         alert(resp.error)
//       } else {
//             this.setState({
//               currentClient: resp.client
//           })
//         }
//       }
//     })
//     .catch(console.log)
//   }
// }