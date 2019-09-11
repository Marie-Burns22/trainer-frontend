// synchornous actions
export const setServices = services => {
    return {
        type: "FETCH_SERVICES",
        services
    }
}

// async actions
export const fetchServices = () => {
    return dispatch => {
        fetch("http://localhost:3000/api/v1/services", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(r => r.json())
            .then(response => {
                if (response.error) {
                    alert(response.error)
                 } else {
                    dispatch(setServices(response.data))
                }
            })      
    }
}

export const addService = (data) => {
    return (dispatch) => {
       return fetch("http://localhost:3000/api/v1/services", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(service => dispatch({type: 'ADD_SERVICE', payload: service}))
    }
}