import { createUserTechnology,
         deleteUserTechnology,
         updateUserTechnology } from "../../util/api/technology_api_util";

export const RECEIVE_TECHNOLOGY = "RECEIVE_TECHNOLOGY";
export const DELETE_TECHNOLOGY = "DELETE_TECHNOLOGY";
export const UPDATE_TECHNOLOGY = "UPDATE_TECHNOLOGY";

export const receiveTechnology = technology => ({
  type: RECEIVE_TECHNOLOGY,
  payload: technology
});

export const removeUserTechnology = id => ({
  type: DELETE_TECHNOLOGY,
  payload: id
});

export const updateExistingUserTechnology = technology => ({
  type: UPDATE_TECHNOLOGY,
  payload: technology
});

export const createTechnology = technology => dispatch => {
  return createUserTechnology(technology).then(newTechnology =>
    dispatch(receiveTechnology(newTechnology))
  );
};

export const deleteTechnology = technology => dispatch => {
  return deleteUserTechnology(technology).then(deletedTechnology =>
    dispatch(removeUserTechnology(deletedTechnology.id))
  );
};

export const updateTechnology = technology => dispatch => {
  return updateUserTechnology(technology).then(updatedTechnology =>
    dispatch(updateExistingUserTechnology(updatedTechnology))
  );
};