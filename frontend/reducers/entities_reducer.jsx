import { combineReducers } from 'redux';
import resumes from './resumes_reducer'
import profile from './profile_reducer'

const entitiesReducer = combineReducers({
    resumes,
    profile,
});

export default entitiesReducer;