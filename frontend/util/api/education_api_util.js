export const createUserEducation = education => (
    $.ajax({
        method: 'POST',
        url: `users/${id}/educations`,
        data: { education }
    })
);

export const deleteUserEducation = education => (
    $.ajax({
        method: 'DELETE',
        url: `users/${education.user_id}/educations`,
        data: { education }
    })
);

export const updateUserEducation = education => (
    $.ajax({
        method: 'PATCH',
        url: `users/${education.user_id}/educations`,
        data: { education }
    })
);