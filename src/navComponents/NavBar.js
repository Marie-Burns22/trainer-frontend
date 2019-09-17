import React from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';
import { logout } from '../actions/currentClientAction';

const NavBar = ({currentClient}) => {
    const Styles = styled.div`
        .navbar {
            background-color: #323;
        }

        .navbar-brand, .navbar-nav .nav-link {
            color: #abc;

            &:hover {
                color: white;
            }
        }
        .active {
            color: rgb(167, 28, 167)
        }
    `;

    return (
        <Styles>
            <Navbar expand="lg">
                <Navbar.Brand href="/">Vegas in Miami</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">

                        <Nav.Item><Nav.Link as={NavLink} exact to="/">Home</Nav.Link></Nav.Item>

                        {currentClient ?
                        <React.Fragment>
                            <Nav.Item><Nav.Link href="/logout">Logout</Nav.Link></Nav.Item>
                            <NavDropdown title="Bookings" id="basic-nav-dropdown">
                                <Nav.Item> <NavDropdown.Item as={NavLink} exact to="/bookings">All My Bookings</NavDropdown.Item></Nav.Item>
                                {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
                                {/* {/* <NavDropdown.Divider /> */}
                                <Nav.Item><NavDropdown.Item as={NavLink} exact to="/bookings/new">New Booking</NavDropdown.Item></Nav.Item>
                                {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */} 
                            </NavDropdown>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <Nav.Item><Nav.Link as={NavLink} exact to="/login">Login</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link as={NavLink} exact to="/signup">Sign Up</Nav.Link></Nav.Item>
                        </React.Fragment>    
                        }


                        <NavDropdown title="Services" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/services">All Services</NavDropdown.Item>
                            {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
                                <NavDropdown.Divider />
                            <NavDropdown.Item href="/services/new">New Service</NavDropdown.Item>
                            {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */} 
                        </NavDropdown>
                    </Nav>
                    {/* <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    )
}

const mapStateToProps = ({ currentClient }) => {
    return {
        currentClient
    }
}
export default connect(mapStateToProps, {logout})(NavBar)

// Link to home
// Link to contact page
