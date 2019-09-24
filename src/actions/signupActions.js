// synchronous action creators
import {setCurrentClient} from './currentClientAction'
export const updateSignUpForm = formData => {
    return {
        type: "UPDATE_SIGNUP_FORM",
        formData
    }
}

export const resetSignUpForm = () => {
    return {
        type: "RESET_SIGNUP_FORM"
    }
}

// async action creators

export const signUp = (credentials, history) => {
    return dispatch => {
        const clientInfo = {
            client: credentials
        }
        console.log(credentials)
        return fetch("http://vimp.herokuapp.com/api/v1/signup", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(clientInfo)
        })
        .then(r => r.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(setCurrentClient(response.data))
                dispatch(resetSignUpForm())
                history.push('/')
            }
        })
        .catch(console.log)
    }
}