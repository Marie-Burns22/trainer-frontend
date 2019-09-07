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
        return fetch("http://localhost:3000/api/v1/services", {
            // credentials:"include",
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
                    //  console.log(response.data)
                    dispatch(setServices(response.data))
                }
            })      
            // .catch(console.log)
    }
}