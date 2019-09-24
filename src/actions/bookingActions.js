// synchronous actions
export const setBookings = bookings => {
    return {
        type: "SET_BOOKINGS",
        bookings
    }
}

// async actions
export const deleteBooking = (clientId, bookingId) => {
    return (dispatch) => {
        fetch(`http://vimp.herokuapp.com/api/v1/clients/${clientId}/bookings/${bookingId}`, {
            credentials: 'include',
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(bookings => dispatch(setBookings(bookings.data)))
    }
}
// The clientId is currently being passed undefined. This fetch request still works because the backend uses its own current_client and logged_in? methods to get the bookings for a specific client.  Also, the routes are nested so the route expects something in the url between clients and bookings and undefined works as would a number.  If you remove clientId from this api url, you will need to change the route in the backend.
export const fetchBookings = clientId => {
    return dispatch => {
        fetch(`http://vimp.herokuapp.com/api/v1/clients/${clientId}/bookings`, {
            credentials: "include",
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(r => r.json())
            .then(bookings => {
                if (bookings.error) {
                    alert(bookings.error)
                } else {
                    dispatch(setBookings(bookings.data))
                }
            })
    }
}

export const addBooking = (booking, clientId, history) => {
    return (dispatch) => {
        const bookingData = {
            booking: {
                day: booking.day,
                time: booking.time,
                service_id: booking.serviceId,
                client_id: clientId,
            }
        }
        fetch(`http://vimp.herokuapp.com/api/v1/clients/${clientId}/bookings`, {
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(bookingData)
        })
        .then(response => response.json())
        .then(bookings => {
            dispatch(setBookings(bookings.data))})
        history.push('/bookings')
    }
}