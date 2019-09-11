// synchronous action creators
export const setCurrentClient = client => {
    return{
        type: "SET_CURRENT_CLIENT",
        client
    }
}

// asynchronous action creators
export const login = credentials => {
    return dispatch => {
        return fetch("http://localhost:3000/api/vi/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)   
        })
    }
}