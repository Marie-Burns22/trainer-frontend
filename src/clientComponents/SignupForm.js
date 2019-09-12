import React from 'react';
import { connect } from 'react-redux';
import {updateSignupForm} from "../actions/signupActions.js"
// import signupReducer from '../reducers/signupReducer.js';


const SignupForm = ({ updateSignupForm, signup, signupFormData }) => {

    const handleChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...signupFormData,
            [name]: value
        }
        updateSignupForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        signup(signupFormData)
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" placeholder="Name" name="name" onChange={handleChange} value={signupFormData.name}/>
            <label>Email</label>
            <input type="text" placeholder="Email" name="email" onChange={handleChange} value={signupFormData.email} />
            <label>Password</label>
            <input type="password" placeholder="Password" name="password" onChange={handleChange} value={signupFormData.password} />
            <input type="submit" value="Sign Up" />
            </form>
        </div>
    )

}

const mapStateToProps = state => {
    return {
        signupFormData: state.signupForm
    }
}

export default connect(mapStateToProps, {updateSignupForm})(SignupForm)