import React from 'react';
import { connect } from 'react-redux';
import {updateSignUpForm} from "../actions/signUpActions.js"
import {signUp} from '../actions/signUpActions'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const SignUpForm = ({ updateSignUpForm, signUp, signUpFormData, history }) => {

    const handleChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...signUpFormData,
            [name]: value
        }
        updateSignUpForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        signUp(signUpFormData, history)
    }

    return (

        <Form onSubmit={handleSubmit}>
            <h4>Sign Up Here</h4>
            <Form.Group controlId="signUpName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" name="name" onChange={handleChange} value={signUpFormData.name} />
                <Form.Text className="text-muted"> Please enter your first and last name.</Form.Text>
            </Form.Group>

            <Form.Group controlId="signUpEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} value={signUpFormData.email} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="signUpPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} value={signUpFormData.password} />
            </Form.Group>

            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    )
}

const mapStateToProps = state => {
    return {
        signUpFormData: state.signUpForm
    }
}

export default connect(mapStateToProps, {updateSignUpForm, signUp})(SignUpForm)