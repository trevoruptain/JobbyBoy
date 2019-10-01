import { combineReducers } from 'redux';
import resumes from './resumes_reducer'
import session from './session_reducer'

const rootReducer = combineReducers({
    resumes,
    session
});

export default rootReducer;
