import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import Services from '../serviceComponents/Services'
import Client from '../clientComponents/Client'
import Button from 'react-bootstrap/Button'

const Home = (props) => {
    return (
        <div className="home">
            {props.loggedIn 
                ?
                <Client />
                :
                <React.Fragment>
                    <h1>Welcome</h1>
                    <p>The Famous Ms. Vegas: Seasoned poleformer and award-winning competitive dancer offering online stretch and pole privates and in-person lessons and training packages in the South Florida Area.</p>
                    <Button as={Link} className="btn-login btn btn-sm btn-info"to="/login">Login</Button>
                    <Button as={Link} className="btn-signup btn btn-sm btn-secondary" to="/signup">SignUp</Button>
                </React.Fragment>
            }
            <Services />
        </div>
    
    )
}
const mapStateToProps = state => {
    return {
        loggedIn: !!state.currentClient
    }
}

export default connect(mapStateToProps)(Home)
