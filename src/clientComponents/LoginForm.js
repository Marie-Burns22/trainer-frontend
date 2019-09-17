import React from 'react'
import {connect } from 'react-redux'
import {updateLoginForm} from '../actions/loginFormActions'
import { login } from '../actions/currentClientAction'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

const LoginForm = ({loginFormData, updateLoginForm, login, history}) => {
    
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
        login(loginFormData, history)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <h4>Login Here:</h4>

            <Form.Group controlId="loginForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control required type="email" onChange={handleChange} name="email" placeholder="Email" value={loginFormData.email} />
            </Form.Group>
            
            
            <Form.Group controlId="loginFormPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={handleChange} name="password" value={loginFormData.password}/>
            </Form.Group>
            <Button type="submit">Login</Button>
        </Form>
    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}

export default connect(mapStateToProps, {updateLoginForm, login})(LoginForm)