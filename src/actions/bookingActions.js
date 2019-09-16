// synchronous actions
export const setBookings = bookings => {
    return {
        type: "FETCH_BOOKINGS",
        bookings
    }
}

// async actions
export const deleteBooking = (bookingId, clientId) => {

    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/clients/${clientId}/transactions/${bookingId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(client => dispatch({type: 'DELETE_TRANSACTION', payload: client}))
    }
}

export const fetchBookings = clientId => {
    return dispatch => {
        return fetch(`http://localhost:3000/api/v1/clients/${clientId}/bookings`, {
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