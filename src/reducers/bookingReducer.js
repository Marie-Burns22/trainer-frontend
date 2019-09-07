export default (state = [], action) => {
    switch (action.type) {
        case "FETCH_BOOKINGS":
            return action.bookings
        default:
            return state
    }
}