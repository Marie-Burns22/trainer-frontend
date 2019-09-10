// synchronous actions
export const setBookings = bookings => {
    return {
        type: "FETCH_BOOKINGS",
        bookings
    }
}

// async actions
export const fetchBookings = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/bookings", {
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
                    dispatch(setBookings(response.data))
                }
            })
    }
}
// TODO: pass in the clientID with the booking and then interpolate it into the url.
// TODO: return the client rather than the booking and then show all the bookings for the current_client
export const addBooking = (booking) => {
    return (dispatch) => {
        fetch("http://localhost:3000/api/v1/bookings", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(booking)
        })
        .then(response => response.json()
        .then(booking => dispatch({type:'ADD_BOOKING', payload: booking})))
    }
}