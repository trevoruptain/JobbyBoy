json.technologies do
    @technologies.each do |technology|
        json.partial! "technologies/technology", technology: technology
    end
end