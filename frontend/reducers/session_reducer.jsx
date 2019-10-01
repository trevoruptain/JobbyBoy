const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

const SessionReducer = (state = { currentUser: true }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        default:
            return state;
    }
};

export default SessionReducer;