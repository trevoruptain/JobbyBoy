json.resumes do
    @resumes.each do |resume|
        json.set! resume.id do
            json.partial! "resumes/resume", resume: resume
        end
    end
end