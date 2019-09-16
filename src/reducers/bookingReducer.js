export default (state = [], action) => {
    switch (action.type) {
        case "SET_BOOKINGS":
            return action.bookings
        
        default:
            return state
    }
}