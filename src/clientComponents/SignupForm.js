import React from 'react';
import { connect } from 'react-redux';
import {updateSignUpForm} from "../actions/signUpActions.js"
import {signUp} from '../actions/signUpActions'



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
        <div className="Form">
            <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" placeholder="Name" name="name" onChange={handleChange} value={signUpFormData.name}/>
            <label>Email</label>
            <input type="text" placeholder="Email" name="email" onChange={handleChange} value={signUpFormData.email} />
            <label>Password</label>
            <input type="password" placeholder="Password" name="password" onChange={handleChange} value={signUpFormData.password} />
            <input type="submit" value="Sign Up" />
            </form>
        </div>
    )

}

const mapStateToProps = state => {
    return {
        signUpFormData: state.signUpForm
    }
}

export default connect(mapStateToProps, {updateSignUpForm, signUp})(SignUpForm)