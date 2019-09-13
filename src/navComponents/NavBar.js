import React from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';

const NavBar = ({currentClient}) => {
    return (
        <Navbar bg="light" expand="lg">
            {currentClient 
            ? 
            <NavLink to="/logout">Logout</NavLink> 
            : 
            <div>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Sign Up</NavLink> 
            </div>
            }
            <NavLink to="/services">All Services</NavLink>
        </Navbar>





    )
}

const mapStateToProps = ({ currentClient }) => {
    return {
        currentClient
    }
}
export default connect(mapStateToProps)(NavBar)

// Link to home
// Link to contact page
