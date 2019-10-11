const RECEIVE_TECHNOLOGIES = "RECEIVE_TECHNOLOGIES";

const ProfileReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_TECHNOLOGIES:
            return Object.assign({}, state, action.payload.technologies);
        default:
            return state;
    }
};

export default ProfileReducer;