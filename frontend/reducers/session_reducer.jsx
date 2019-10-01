const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

const SessionReducer = (state = { currentUser: true }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    debugger;
    switch (action.type) {
        default:
            return state;
    }
};

export default SessionReducer;