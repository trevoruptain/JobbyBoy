import { fetchUserTechnologies } from '../util/api/profile_api_util';

export const RECEIVE_TECHNOLOGIES = 'RECEIVE_TECHNOLOGIES';

export const receiveTechnologies = (technologies) => ({
    type: RECEIVE_TECHNOLOGIES,
    payload: technologies
});

export const fetchTechnologies = () => (dispatch) => {
    return fetchUserTechnologies().then(technologies => (
        dispatch(receiveTechnologies(technologies))
    ));
}