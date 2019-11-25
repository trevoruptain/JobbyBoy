json.educations do
    @educations.each do |education|
        json.partial! "educations/education", education: education
    end
end