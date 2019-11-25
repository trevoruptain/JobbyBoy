import { RECEIVE_PERSONAL_INFO, RECEIVE_TECHNOLOGIES, RECEIVE_EXPERIENCES,
         RECEIVE_EDUCATIONS, RECEIVE_PROJECTS } from '../actions/profile-actions';

const ProfileReducer = (state = {}, action) => {
    Object.freeze(state);
    // let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_PERSONAL_INFO:
            return Object.assign({}, state, { personalInfo: action.payload.personalInfo });
        case RECEIVE_TECHNOLOGIES:
            return Object.assign({}, state, { technologies: action.payload.technologies });
        case RECEIVE_EXPERIENCES:
            return Object.assign({}, state, { experiences: action.payload.experiences });
        case RECEIVE_EDUCATIONS:
            return Object.assign({}, state, { educations: action.payload.educations });
        case RECEIVE_PROJECTS:
            return Object.assign({}, state, { projects: action.payload.projects });
        default:
            return state;
    }
};

export default ProfileReducer;