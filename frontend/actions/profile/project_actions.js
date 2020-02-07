import { createUserProject, 
         createUserProjectBullet, 
         deleteUserProject,
         deleteUserProjectBullet, 
         updateUserProject, 
         updateUserProjectBullet } from '../../util/api/project_api_util';

export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const DELETE_PROJECT = "DELETE_PROJECT";
export const DELETE_PROJECT_BULLET = "DELETE_PROJECT_BULLET";
export const UPDATE_PROJECT_BULLET = "UPDATE_PROJECT_BULLET";
export const UPDATE_PROJECT = "UPDATE_PROJECT";

export const receiveProject = project => ({
  type: RECEIVE_PROJECT,
  payload: project
});

export const removeUserProject = id => ({
  type: DELETE_PROJECT,
  payload: id
});

export const removeUserProjectBullet = id => ({
  type: DELETE_PROJECT_BULLET,
  payload: id
});

export const updateExistingUserProject = project => ({
  type: UPDATE_PROJECT,
  payload: project
});

export const updateExistingUserProjectBullet = projectBullet => ({
  type: UPDATE_PROJECT_BULLET,
  payload: projectBullet
});

export const createProject = project => dispatch => {
  return createUserProject(project).then(newProject =>
    dispatch(receiveProject(newProject))
  );
};

export const createProjectBullet = projectBullet => dispatch => {
  return createUserProjectBullet(projectBullet).then(project =>
    dispatch(receiveProject(project))
  );
};

export const deleteProject = project => dispatch => {
  return deleteUserProject(project).then(project =>
    dispatch(removeUserProject(project.id))
  );
};

export const deleteProjectBullet = bullet => dispatch => {
  return deleteUserProjectBullet(bullet).then(bullet =>
    dispatch(removeUserProjectBullet(bullet.id))
  );
};

export const updateProject = project => dispatch => {
  return updateUserProject(project).then(updatedProject =>
    dispatch(updateExistingUserProject(updatedProject))
  );
};

export const updateProjectBullet = bullet => dispatch => {
  return updateUserProjectBullet(bullet).then(project =>
    dispatch(updateExistingUserProject(project))
  );
};