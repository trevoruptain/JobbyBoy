const LOADING = "LOADING";

const UIReducer = (state = { loading: true }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state, { loading: false });

    switch (action.type) {
        case LOADING:
            Object.assign({}, state, { loading: true });
        default:
            return newState;
    }
};

export default UIReducer;