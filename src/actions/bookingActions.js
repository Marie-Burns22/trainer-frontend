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
        fetch(`http://localhost:3000/api/v1/clients/${clientId}/bookings/${bookingId}`, {
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

export const fetchBookings = clientId => {
    return dispatch => {
        fetch(`http://localhost:3000/api/v1/clients/${clientId}/bookings`, {
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

export const addBooking = (booking, clientId) => {
    return (dispatch) => {
        const bookingData = {
            booking: {
                day: booking.day,
                time: booking.time,
                service_id: booking.serviceId,
                client_id: clientId,
            }
        }
        fetch(`http://localhost:3000/api/v1/clients/${clientId}/bookings`, {
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(bookingData)
        })
        .then(response => response.json())
        .then(client => dispatch({type:'ADD_BOOKING', payload: client.data}))
    }
}