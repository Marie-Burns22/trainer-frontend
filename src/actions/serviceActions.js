



export default function fetchServices() {
    return (dispatch) => {
        fetch('http://localhost3000/api/v1/services')
        .then(resp => resp.json())
        .then(services =>  dispatch({
            type: "FETCH_SERVICES",
            payload: services
        })) 
    } 
}