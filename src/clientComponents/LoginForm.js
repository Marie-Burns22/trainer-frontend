import React from 'react'
import {connect } from 'react-redux'
import {updateLoginForm} from '../actions/loginFormActions'
import { login } from '../actions/currentClientAction'

const LoginForm = ({loginFormData, updateLoginForm, login}) => {
    
    const handleChange = event => {
        const { name, value } = event.target
        const formData = {
            ...loginFormData,
            [name]: value
        }
        updateLoginForm(formData)
    }

    const handleSubmit = event => {
        event.preventDefault()
        login(loginFormData)

    }


    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} name="email" value={loginFormData.email}/>
            <input type="password" onChange={handleChange} name="password" value={loginFormData.password} />
            <input type="submit" value="Log In" />
        </form>
    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}

export default connect(mapStateToProps, {updateLoginForm, login})(LoginForm)