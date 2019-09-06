import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login } from '../actions/currentUserAction'

class LoginForm extends Component {

    state = {
        email: '',
        password: ''
    };

    handleOnChange = event => {

        this.setState({ 
            [event.target.name]: event.target.value 
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        const credentials = this.state;
        this.props.login(credentials)
        this.setState({
            email: '',
            password: ''
        })
    }
// TODO fix logout after login works
    // logout = event => {
    //     event.preventDefault()
    // //     fetch("http:localhost:3000/api/v1/logout",
    //             credentials: "include"
                // method: "DELETE",
    //             headers: {
    //                 
    //                 "Content-Type": "application/json"
    //             }        
                // }  )
    //     this.setState({
        
    //     })
    // }

    render() {
        return (
        <div className='container'>
            <form onSubmit={this.handleOnSubmit}>
                <input value={this.state.email} type="text" name="email" onChange={this.handleOnChange} />
                <input value={this.state.password} type="text" name="password" onChange={this.handleOnChange} />
                <button type="submit" className="btn bth-default btn-info">Login</button>
            </form>
        </div>
        )
    }
}

export default connect(null, { login })(LoginForm)
