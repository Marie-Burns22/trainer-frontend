import React from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'
import Logout from '../clientComponents/Logout';
import Client from '../clientComponents/Client';
import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container'
// import { LinkContainer } from 'react-router-bootstrap'


const NavBar = ({currentClient}) => {
    return (
        // <Container>
            <Navbar bg="info" expand="lg">

            {currentClient ? 
            <h2>Welcome, {currentClient.attributes.name}  <Logout /> <Client /> </h2> : 
            <p>Please <NavLink to="/login">Login</NavLink>  or <NavLink to="/signup">Sign Up</NavLink></p>}

            </Navbar>
        // </Container>
    )
}

const mapStateToProps = ({ currentClient }) => {
    return {
        currentClient
    }
}
export default connect(mapStateToProps)(NavBar)

// This component should display on all pages
// Link to list of all available services
// Link to home
// If not logged in, link to login or sign up
// Link to contact page
