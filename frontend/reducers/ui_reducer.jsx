import { START_LOADING, FINISH_LOADING } from '../actions/loading-actions';

const UIReducer = (state = { loading: false }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state, { loading: true });

    switch (action.type) {
        case START_LOADING:
            return Object.assign({}, state, { loading: true });
        case FINISH_LOADING:
            return Object.assign({}, state, { loading: false });
        default:
            return newState;
    }
};

export default UIReducer;