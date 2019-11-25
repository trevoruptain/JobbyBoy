import { fetchUserPersonalInfo, 
         fetchUserTechnologies, 
         fetchUserExperiences,
         fetchUserEducations, 
         fetchUserProjects } from '../util/api/profile_api_util';

export const RECEIVE_PERSONAL_INFO = 'RECEIVE_PERSONAL_INFO';
export const RECEIVE_TECHNOLOGIES = 'RECEIVE_TECHNOLOGIES';
export const RECEIVE_EXPERIENCES = 'RECEIVE_EXPERIENCES';
export const RECEIVE_EDUCATIONS = 'RECEIVE_EDUCATIONS';
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';

export const receivePersonalInfo = (info) => ({
    type: RECEIVE_PERSONAL_INFO,
    payload: { personalInfo: info }
});

export const receiveTechnologies = (technologies) => ({
    type: RECEIVE_TECHNOLOGIES,
    payload: technologies
});

export const receiveExperiences = (experiences) => ({
    type: RECEIVE_EXPERIENCES,
    payload: experiences
});

export const receiveEducations = (educations) => ({
    type: RECEIVE_EDUCATIONS,
    payload: educations
});

export const receiveProjects = (projects) => ({
    type: RECEIVE_PROJECTS,
    payload: projects
});

export const fetchPersonalInfo = id => dispatch => {
    return fetchUserPersonalInfo(id).then(personalInfo => (
        dispatch(receivePersonalInfo(personalInfo))
    ));
}

export const fetchTechnologies = id => dispatch => {
    return fetchUserTechnologies(id).then(technologies => (
        dispatch(receiveTechnologies(technologies))
    ));
}

export const fetchExperiences = id => dispatch => {
    return fetchUserExperiences(id).then(experiences => (
        dispatch(receiveExperiences(experiences))
    ));
}

export const fetchEducations = id => dispatch => {
    return fetchUserEducations(id).then(educations => (
        dispatch(receiveEducations(educations))
    ));
}

export const fetchProjects = id => dispatch => {
    return fetchUserProjects(id).then(projects => (
        dispatch(receiveProjects(projects))
    ));
}