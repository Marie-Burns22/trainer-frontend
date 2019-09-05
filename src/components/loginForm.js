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
        const loginData = this.state;
        this.props.login(loginData)
        this.setState({
            email: '',
            password: ''
        })
    }

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
