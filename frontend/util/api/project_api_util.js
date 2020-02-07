export const createUserProject = project => (
    $.ajax({
        method: 'POST',
        url: `users/${project.user_id}/projects`,
        data: { project }
    })
);

export const createUserProjectBullet = bullet => (
    $.ajax({
        method: 'POST',
        url: `users/${bullet.user_id}/projects/${bullet.project_id}/project_bullets`,
        data: { experience }
    })
);

export const deleteUserProject = project => (
    $.ajax({
        method: 'DELETE',
        url: `users/${project.user_id}/projects`,
        data: { project }
    })
);

export const deleteUserProjectBullet = bullet => (
    $.ajax({
        method: 'DELETE',
        url: `users/${bullet.user_id}/projects/${bullet.experience_id}/project_bullets`,
        data: { bullet }
    })
);

export const updateUserProject = project => (
    $.ajax({
        method: 'PATCH',
        url: `users/${project.user_id}/projects`,
        data: { project }
    })
);

export const updateUserProjectBullet = bullet => (
    $.ajax({
        method: 'PATCH',
        url: `users/${bullet.user_id}/projects/${bullet.experience_id}/project_bullets`,
        data: { bullet }
    })
);