import React from 'react'
import { connect } from 'react-redux'
import Logout from '../clientComponents/Logout';
import LoginForm from '../clientComponents/LoginForm'

const NavBar = ({currentClient}) => {
    return (
        <div className="NavBar">
            {currentClient ? <p>Welcome, {currentClient.attributes.name}</p> : <p>Please Login or Signup</p>}
            {currentClient ? <Logout /> : <LoginForm />}
        </div>
    )
}

const mapStateToProps = ({ currentClient }) => {
    return {
        currentClient
    }
}
export default connect(mapStateToProps)(NavBar)