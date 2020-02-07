export const updateUserPersonalInfo = user => {
    return $.ajax({
        method: 'PATCH',
        url: `users/${user.id}`,
        data: {user}
    })
};