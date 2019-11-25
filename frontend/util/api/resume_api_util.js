export const fetchAllResumes = () => (
    $.ajax({
        method: 'GET',
        url: 'users/1/resumes',
    })
);