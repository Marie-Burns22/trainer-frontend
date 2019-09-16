import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import Services from '../serviceComponents/Services'

const Home = (props) => {
    return (
        <div className="container">
            <h1>Welcome</h1>
                <p>The Famous Ms. Vegas Seasoned poleformer and award-winning competitive dancer offering online stretch and pole privates and in-person lessons and training packages in the South Florida Area.</p>

                {props.currentClient ?
                    <React.Fragment>
                        <Link href="/logout">Logout</Link>
                        <Link href="/bookings/new">New Booking</Link>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <Link href="/login">Login</Link>
                        <Link href="/signup">SignUp</Link>
                    </React.Fragment>
                }

                <Services />
        </div>
    
    )
}
const mapStateToProps = state => {
    return {
        currentClient: state.currentClient
    }
}

export default connect(mapStateToProps)(Home)
