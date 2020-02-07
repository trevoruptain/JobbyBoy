export const createUserExperience = experience => (
    $.ajax({
        method: 'POST',
        url: `users/${experience.user_id}/experiences`,
        data: { experience }
    })
);

export const createUserExperienceBullet = bullet => (
    $.ajax({
        method: 'POST',
        url: `users/${bullet.user_id}/experiences/${bullet.experience_id}/experience_bullets`,
        data: { experience }
    })
);

export const deleteUserExperience = experience => (
    $.ajax({
        method: 'DELETE',
        url: `users/${experience.user_id}/experiences`,
        data: { experience }
    })
);

export const deleteUserExperienceBullet = bullet => (
    $.ajax({
        method: 'DELETE',
        url: `users/${bullet.user_id}/experiences/${bullet.experience_id}/experience_bullets`,
        data: { bullet }
    })
);

export const updateUserExperience = experience => (
    $.ajax({
        method: 'PATCH',
        url: `users/${experience.user_id}/experiences`,
        data: { experience }
    })
);

export const updateUserExperienceBullet = bullet => (
    $.ajax({
        method: 'PATCH',
        url: `users/${bullet.user_id}/experiences/${bullet.experience_id}/experience_bullets`,
        data: { bullet }
    })
);