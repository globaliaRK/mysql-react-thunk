export default (state = [], action) => {
    switch (action.type) {
        case "FETCH_DATES":
            return action.payload.data;
        default:
            return state;
    }
}