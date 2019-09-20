# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  email      :string           not null
#  phone      :string           not null
#  address    :string           not null
#  objective  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class User < ApplicationRecord
    validates :name, :email, :phone, :address, :objective, presence: true

    has_many :resumes
    has_many :experiences
    has_many :technologies, through: :user_technologies
end
