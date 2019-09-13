import React from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'
import Logout from '../clientComponents/Logout';
import Client from '../clientComponents/Client'


const NavBar = ({currentClient}) => {
    return (
        <div className="NavBar container">
            {currentClient ? 
            <h2>Welcome, {currentClient.attributes.name}  <Logout /> <Client /> </h2> : 
            <p>Please <NavLink to="/login">Login</NavLink>  or <NavLink to="/signup">Sign Up</NavLink></p>}

            
        </div>
    )
}

const mapStateToProps = ({ currentClient }) => {
    return {
        currentClient
    }
}
export default connect(mapStateToProps)(NavBar)