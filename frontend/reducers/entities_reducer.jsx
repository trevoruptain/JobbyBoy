import { combineReducers } from 'redux';
import resumes from './resumes_reducer'

const entitiesReducer = combineReducers({
    resumes
});

export default entitiesReducer;