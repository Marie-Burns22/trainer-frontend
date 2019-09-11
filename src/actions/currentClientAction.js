// synchronous action creators
export const setCurrentClient = client => {
    return{
        type: "SET_CURRENT_CLIENT",
        client
    }
}

// asynchronous action creators
export const login = credentials => {
    console.log("credentials are:", credentials)
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/login", {
        credentials: "include",    
        headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(credentials)   
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

export const getCurrentClient = () => {
    return (dispatch) => {
        return fetch("http://localhost:3000/api/v1/get_current_client", {
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            method: 'GET',
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