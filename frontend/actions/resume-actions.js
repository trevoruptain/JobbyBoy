import { fetchAllResumes } from '../util/resume_api_util';

export const RECEIVE_RESUMES = 'RECEIVE_RESUMES';

export const receiveResumes = (resumes) => ({
    type: RECEIVE_RESUMES,
    payload: resumes
});

export const fetchResumes = () => (dispatch) => {
    return fetchAllResumes().then(resumes => ( 
        dispatch(receiveResumes(resumes)) 
    ));
}