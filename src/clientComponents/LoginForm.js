import React from 'react'
import {connect } from 'react-redux'
import {updateLoginForm} from '../actions/loginFormActions'

const LoginForm = ({loginForm, updateLoginForm}) => {
    const handleChange = event => {
        const { name, value } = event.target
        const formData = {
            ...loginForm,
            [name]: value
        }
        updateLoginForm(formData)
    }

    
    
    return (
        <form onSubmit={undefined}>
            <input type="text" onChange={handleChange} name="email" value={loginForm.email}/>
            <input type="password" onChange={handleChange} name="password" value={loginForm.password} />
        </form>
    )
}

const mapStateToProps = state => {
    return {
        loginForm: state.loginForm
    }
}

export default connect(mapStateToProps, {updateLoginForm})(LoginForm)