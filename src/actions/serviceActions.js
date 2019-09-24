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
        fetch("http://vimp.herokuapp.com/api/v1/services", {
            credentials: 'include',
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

export const addService = (data, history) => {
    return (dispatch) => {
        fetch("http://vimp.herokuapp.com/api/v1/services", {
            credentials: 'include',    
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(service => dispatch({type: 'ADD_SERVICE', payload: service.data}))
        history.push('/services')
    }
}

export const deleteService = (serviceId, history) => {
    return dispatch => {
        fetch(`http://vimp.herokuapp.com/api/v1/services/${serviceId}`, {
            credentials: "include",
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(services => dispatch(setServices(services.data)))
        history.push('/services')
    }
}