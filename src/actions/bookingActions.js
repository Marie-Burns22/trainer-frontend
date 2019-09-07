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
        return fetch("http:localhost:3000/api/v1/bookings", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(r => r.json())
            .then(response => {
                // if (response.error) {
                //     alert(response.error)
                // } else {
                    console.log(response.data)
                    dispatch(setBookings(response.data))
                // }
            })
            .catch(console.log)
    }
}