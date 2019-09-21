json.resumes do
    @resumes.each do |resume|
        json.partial! "api/resumes/resume", resume: resume
    end
end