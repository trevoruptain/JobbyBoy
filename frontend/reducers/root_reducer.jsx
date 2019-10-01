import { combineReducers } from 'redux';
import resumes from './resumes_reducer'
import session from './session_reducer'
import ui from './ui_reducer'

const rootReducer = combineReducers({
    resumes,
    session, 
    ui
});

export default rootReducer;
