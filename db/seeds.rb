# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

User.delete_all
Resume.delete_all
Technology.delete_all
Project.delete_all
ProjectBullet.delete_all
Experience.delete_all
ExperienceBullet.delete_all
UserTechnology.delete_all

User.reset_pk_sequence
Resume.reset_pk_sequence
Technology.reset_pk_sequence
Project.reset_pk_sequence
ProjectBullet.reset_pk_sequence
Experience.reset_pk_sequence
ExperienceBullet.reset_pk_sequence
UserTechnology.reset_pk_sequence

2.times do
    User.create!(
        name: Faker::Name.name,
        email: Faker::Internet.email,
        phone: Faker::PhoneNumber.phone_number,
        address: Faker::Address.full_address,
        objective: Faker::TvShows::Community.quotes
    )
end

10.times do |i|
    user_id = (i % 2) + 1

    Resume.create!(
        title: Faker::Cannabis.strain,
        primary_color: Faker::Color.color_name,
        secondary_color: Faker::Color.color_name,
        user_id: user_id
    )
end

100.times do |i|
    Technology.create!(
        name: Faker::Science.element
    )
end

20.times do
    Project.create!(
        title: Faker::Military.marines_rank,
        user_id: rand(2) + 1
    )
end

100.times do 
    ProjectBullet.create!(
        project_id: rand(20) + 1,
        body: Faker::TvShows::SiliconValley.quote
    )
end

20.times do  
    rand_day = rand(100000)

    Experience.create!(
        start_date: Faker::Date.forward(days: rand_day),
        end_date: Faker::Date.forward(days: rand_day + rand(10000)),
        company_name: Faker::TvShows::Seinfeld.business,
        user_id: rand(2) + 1
    )
end

100.times do 
    ExperienceBullet.create!(
        experience_id: rand(20) + 1,
        body: Faker::TvShows::MichaelScott
    )
end

60.times do
    UserTechnology.create!(
        name: Faker::TvShows::BojackHorseman.character,
        user_id: rand(2) + 1,
        technology_id: rand(100) + 1
    )
end