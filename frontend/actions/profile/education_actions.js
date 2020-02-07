import { createUserEducation, 
         deleteUserEducation, 
         updateUserEducation } from '../../util/api/education_api_util';

export const RECEIVE_EDUCATION = "RECEIVE_EDUCATION";
export const DELETE_EDUCATION = "DELETE_EDUCATION";
export const UPDATE_EDUCATION = "UPDATE_EDUCATION";

export const receiveEducation = education => ({
  type: RECEIVE_EDUCATION,
  payload: education
});

export const removeUserEducation = id => ({
  type: DELETE_EDUCATION,
  payload: id
});

export const updateExistingUserEducation = education => ({
  type: UPDATE_EDUCATION,
  payload: education
});

export const createEducation = education => dispatch => {
  return createUserEducation(education).then(newEducation =>
    dispatch(receiveEducation(newEducation))
  );
};

export const deleteEducation = education => dispatch => {
  return deleteUserEducation(education).then(education =>
    dispatch(removeUserEducation(education.id))
  );
};

export const updateEducation = education => dispatch => {
  return updateUserEducation(education).then(updatedEducation =>
    dispatch(updateExistingUserEducation(updatedEducation))
  );
};