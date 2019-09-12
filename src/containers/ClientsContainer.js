import React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../clientComponents/LoginForm';
import Logout from '../clientComponents/Logout'



class ClientsContainer extends React.Component {

    render() {

        return(
            <div>
               { this.props.currentClient ? <Logout /> : <LoginForm /> }

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

