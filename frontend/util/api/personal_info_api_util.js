export const fetchUserPersonalInfo = id => (
    $.ajax({
        method: 'GET',
        url: `users/${id}`,
    })
);

export const updateUserPersonalInfo = user => {
    return $.ajax({
        method: 'PATCH',
        url: `users/${user.id}`,
        data: {user}
    })
};