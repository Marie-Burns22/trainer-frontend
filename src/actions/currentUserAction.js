// synchronous action creators

export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}


// asynchronous action creators

export const login = loginData => {
    console.log("loginData is:", loginData)
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email: loginData.email, password: loginData.password })
        })
    }
}