export const createUserTechnology = technology => (
    $.ajax({
        method: 'POST',
        url: `users/${technology.user_id}/technologies`,
        data: { technology }
    })
);

export const deleteUserTechnology = technology => (
    $.ajax({
        method: 'DELETE',
        url: `users/${technology.user_id}/technologies`,
        data: { technology }
    })
);

export const updateUserTechnology = technology => (
    $.ajax({
        method: 'PATCH',
        url: `users/${technology.user_id}/technologies`,
        data: { technology }
    })
);