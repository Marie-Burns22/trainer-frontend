import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginFormAction'
// const handleOnSubmit = () => {
//     console.log("In handleOnSubmit")
//     return "Submitted"
// }
// const handleChange = () => {
//     console.log("In handleChange")
//     return "Changed"
// }



const Login = ({ email, password }) => {
    return (
        <form>
            <input value={email} type="text" name="email" />
            <input value={password} type="text" name="password" />

        </form>
    )
}
//this function gives an argument to this component that is an object
const mapStateToProps = state => {
    return {
        email: state.loginForm.email,
        password: state.loginForm.password
    }
}

export default connect(mapStateToProps, { updateLoginForm })(Login)