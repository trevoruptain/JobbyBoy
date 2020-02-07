import { fetchUserPersonalInfo } from '../../util/api/profile_api_util';
import { updateUserPersonalInfo } from '../../util/api/personal_info_api_util';

export const RECEIVE_PERSONAL_INFO = 'RECEIVE_PERSONAL_INFO';

export const receivePersonalInfo = info => ({
    type: RECEIVE_PERSONAL_INFO,
    payload: { personalInfo: info }
});

export const fetchPersonalInfo = id => dispatch => {
    return fetchUserPersonalInfo(id).then(personalInfo => (
        dispatch(receivePersonalInfo(personalInfo))
    ));
}

export const updatePersonalInfo = user => dispatch => {
    return updateUserPersonalInfo(user).then(personalInfo => (
        dispatch(receivePersonalInfo(personalInfo))
    ));
}