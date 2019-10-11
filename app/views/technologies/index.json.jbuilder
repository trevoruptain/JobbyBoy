json.technologies do
    @technologies.each do |technology|
        json.set! technology.name do
            json.partial! "technologies/technology", technology: technology
        end
    end
end