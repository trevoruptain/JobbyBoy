json.projects do
    @projects.each do |project|
        json.partial! "projects/project", project: project
    end
end