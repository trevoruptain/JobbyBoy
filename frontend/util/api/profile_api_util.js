export const fetchUserPersonalInfo = id => (
    $.ajax({
        method: 'GET',
        url: `users/${id}`,
    })
);

export const fetchUserTechnologies = id => (
    $.ajax({
        method: 'GET',
        url: `users/${id}/technologies`,
    })
);

export const fetchUserExperiences = id => (
    $.ajax({
        method: 'GET',
        url: `users/${id}/experiences`,
    })
);

export const fetchUserEducations = id => (
    $.ajax({
        method: 'GET',
        url: `users/${id}/educations`,
    })
);

export const fetchUserProjects = id => (
    $.ajax({
        method: 'GET',
        url: `users/${id}/projects`,
    })
);

