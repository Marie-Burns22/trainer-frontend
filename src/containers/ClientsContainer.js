import React from 'react';
import { connect } from 'react-redux';

class ClientsContainer extends React.Component {
    render() {
        return(
            <div>
               {/* { this.props.currentClient ? <p>Welcome, {this.props.currentClient.attributes.name}</p> : <p>Please Login or Signup</p>} 
               { this.props.currentClient ? <Logout /> : <LoginForm /> } */}
            </div>
        )
    }
}
const mapStateToProps = ({ currentClient }) => {
    return {
        currentClient
    }
}
export default connect(mapStateToProps)(ClientsContainer)

//This component will use currentClient and logic to determine if to render client component?

