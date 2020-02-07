import { createUserExperience, 
         createUserExperienceBullet, 
         deleteUserExperience,
         deleteUserExperienceBullet, 
         updateUserExperience, 
         updateUserExperienceBullet } from '../util/api/experience_api_util';

export const RECEIVE_EXPERIENCE = "RECEIVE_EXPERIENCE";
export const DELETE_EXPERIENCE = "DELETE_EXPERIENCE";
export const UPDATE_EXPERIENCE = "UPDATE_EXPERIENCE";
export const DELETE_EXPERIENCE_BULLET = "DELETE_EXPERIENCE_BULLET";
export const UPDATE_EXPERIENCE_BULLET = "UPDATE_EXPERIENCE_BULLET";

export const receiveExperience = experience => ({
  type: RECEIVE_EXPERIENCE,
  payload: experience
});

export const removeUserExperience = id => ({
  type: DELETE_EXPERIENCE,
  payload: id
});

export const removeUserExperienceBullet = id => ({
  type: DELETE_EXPERIENCE_BULLET,
  payload: id
});

export const updateExistingUserExperience = experience => ({
  type: UPDATE_EXPERIENCE,
  payload: experience
});

export const updateExistingUserExperienceBullet = experienceBullet => ({
  type: UPDATE_EXPERIENCE_BULLET,
  payload: experienceBullet
});

export const createExperience = experience => dispatch => {
  return createUserExperience(experience).then(newExperience =>
    dispatch(receiveExperience(newExperience))
  );
};

export const createExperienceBullet = experienceBullet => dispatch => {
  return createUserExperienceBullet(experienceBullet).then(experience =>
    dispatch(receiveExperience(experience))
  );
};

export const deleteExperience = experience => dispatch => {
  return deleteUserExperience(experience).then(experience =>
    dispatch(removeUserExperience(experience.id))
  );
};

export const deleteExperienceBullet = bullet => dispatch => {
  return deleteUserExperienceBullet(bullet).then(experienceBullet =>
    dispatch(removeUserExperienceBullet(experienceBullet.id))
  );
};

export const updateExperience = experience => dispatch => {
  return updateUserExperience(experience).then(updatedExperience =>
    dispatch(updateExistingUserExperience(updatedExperience))
  );
};

export const updateExperienceBullet = experienceBullet => dispatch => {
  return updateUserExperienceBullet(experienceBullet).then(updatedBullet =>
    dispatch(updateExistingUserExperienceBullet(updatedBullet))
  );
};