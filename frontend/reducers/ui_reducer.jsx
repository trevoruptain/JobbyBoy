import { START_LOADING, FINISH_LOADING } from '../actions/loading-actions';

const UIReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case START_LOADING:
            return Object.assign({}, state, { loading: true });
        case FINISH_LOADING:
            return Object.assign({}, state, { loading: false });
        default:
            return Object.assign({}, state, { loading: true })
    }
};

export default UIReducer;