export const fetchUserTechnologies = () => (
    $.ajax({
        method: 'GET',
        url: 'users/1/technologies',
    })
);