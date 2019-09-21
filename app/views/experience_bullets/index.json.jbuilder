json.experience_bullets do
    @experience_bullets.each do |experience_bullet|
        json.partial! "api/experience_bulletss/experience_bullets", experience_bullet: experience_bullet
    end
end