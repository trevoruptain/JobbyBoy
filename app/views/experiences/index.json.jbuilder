json.experiences do
    @experiences.each do |experience|
        json.set! experience.company_name do
            json.partial! "experiences/experience", experience: experience
        end
    end
end