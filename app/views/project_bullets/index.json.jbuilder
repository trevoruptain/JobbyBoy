json.project_bullets do
    @project_bullets.each do |project_bullet|
        json.partial! "api/project_bulletss/project_bullets", project_bullet: project_bullet
    end
end