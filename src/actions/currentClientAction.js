// synchronous action creators
export const setCurrentClient = client => {
    return{
        type: "SET_CURRENT_CLIENT",
        client
    }
}

// asynchronous action creators
export const login = (credentials) => {
    console.log("credentials are:", credentials)
    return (dispatch) => {
        console.log("Hi")
        return fetch("http://localhost:3000/api/v1/login", {
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(credentials)   
        })
        // .then(response => response.json())
    }
}
