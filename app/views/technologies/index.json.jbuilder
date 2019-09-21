json.technologies do
    @technologies.each do |technology|
        json.partial! "api/technologies/technology", technology: technology
    end
end