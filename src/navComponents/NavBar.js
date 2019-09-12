import React from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'
import Logout from '../clientComponents/Logout';
// import LoginForm from '../clientComponents/LoginForm'

const NavBar = ({currentClient}) => {
    return (
        <div className="NavBar container">
            {currentClient ? <p>Welcome, {currentClient.attributes.name}  <Logout /> </p> : <p>Please <NavLink to="/login">Login</NavLink>  or <NavLink to="/signup">Sign Up</NavLink></p>}
            {/* {currentClient ? : <LoginForm />} */}
            
        </div>
    )
}

const mapStateToProps = ({ currentClient }) => {
    return {
        currentClient
    }
}
export default connect(mapStateToProps)(NavBar)