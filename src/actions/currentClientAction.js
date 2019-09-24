import { resetLoginForm } from './loginFormActions'

// synchronous action creators
export const setCurrentClient = client => {
    return{
        type: "SET_CURRENT_CLIENT",
        client
    }
}

export const clearCurrentClient = () => {
    return {
        type: "CLEAR_CURRENT_CLIENT"
    }
}

// asynchronous action creators
export const login = (credentials, history) => {

    return dispatch => {
        return fetch("http://vimp.herokuapp.com/api/v1/login", {
            credentials: "include",    
            method: 'POST',
            headers: {
                    "Content-Type": "application/json",
                    'Accept': 'application/json'
                },
            body: JSON.stringify(credentials)   
        })
        .then(r => r.json())
        .then(response => {
            if (response.error) {
                alert(response.error) 
            } else {
                dispatch(setCurrentClient(response.data))
                dispatch(resetLoginForm())
                history.push('/')
            }
        })
        .catch(console.log)
    }
}

export const logout = (history) => {

    return dispatch => {
        dispatch(clearCurrentClient())
        history.push('/')
        return fetch('http://vimp.herokuapp.com/api/v1/logout', {
            credentials: "include",
            method: "DELETE"
        })

    }
}

export const getCurrentClient = () => {
    return dispatch => {
        return fetch("http://vimp.herokuapp.com/api/v1/get_current_client", {
            credentials: "include",
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
        })
            .then(r => r.json())
            .then(response => {
                if (response.error) {
                    alert(response.error)
                } else {
                    dispatch(setCurrentClient(response.data))

                }
            })
            .catch(console.log)
    }
}