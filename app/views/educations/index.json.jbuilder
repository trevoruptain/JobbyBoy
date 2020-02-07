json.educations do
    @educations.each do |education|
        json.set! education.school do
            json.partial! "educations/education", education: education
        end
    end
end