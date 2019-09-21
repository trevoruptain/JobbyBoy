json.project_bullets do
    @project_bullets.each do |project_bullet|
        json.partial! "project_bullets/project_bullet", project_bullet: project_bullet
    end
end