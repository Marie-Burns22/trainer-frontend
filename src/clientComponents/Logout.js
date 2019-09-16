import React from 'react';
import { connect } from 'react-redux';
import { logout } from "../actions/currentClientAction"

const Logout = ({logout, history}) => {
    return (
        <form onSubmit={logout(history)}>
            <input type="submit" value="Log Out"/>
        </form>
    )
}

export default connect(null, {logout})(Logout)

// This component can probably be removed. the onSubmit can moved to a button