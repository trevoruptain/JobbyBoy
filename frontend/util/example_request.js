export default `
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://jobbyboy.com/api/resumes",
        "method": "POST",
        "headers": {
            "Authorization": "YOUR-KEY-HERE",
            "Content-Type": "application/x-www-form-urlencoded",
        },
        "data": {
            "job-title": "Software Engineer",
            "job-url": "http://somejobboard.com/awesomejobs/42",
            "job-desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "primary-color": "#32a852",
            "secondary-color": "#c4c4c4",
            "font": "Times New Roman"
        }
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
`;