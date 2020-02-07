json.projects do
    @projects.each do |project|
        json.set! project.title do
            json.partial! "projects/project", project: project
        end
    end
end