const RECEIVE_RESUMES = "RECEIVE_RESUMES";

const NotesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    
    switch (action.type) {
        case RECEIVE_RESUMES:
            return Object.assign({}, state, action.resumes)
        default:
            return state;
    }
};

export default NotesReducer;