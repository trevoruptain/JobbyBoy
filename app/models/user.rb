# == Schema Information
#
# Table name: users
#
#  id                   :bigint           not null, primary key
#  name                 :string           not null
#  email                :string           not null
#  phone                :string           not null
#  personal_site        :string           not null
#  address              :string           not null
#  objective            :string           not null
#  google_token         :string           not null
#  google_refresh_token :string           not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#

class User < ApplicationRecord
    validates :name, :email, :phone, :personal_site, :address, :objective, presence: true
    validates :email, uniqueness: true
    # validates :password, length: { minimum: 6 }, allow_nil: true

    # after_initialize :ensure_session_token

    has_many :resumes, dependent: :destroy
    has_many :projects, dependent: :destroy
    has_many :experiences, dependent: :destroy
    has_many :educations, dependent: :destroy
    has_many :technologies, through: :user_technologies
    has_many :experience_bullets, through: :experiences
    has_many :project_bullets, through: :projects

    # Create a new user only if it doesn't exist
    def self.from_omniauth(auth)
        where(email: auth.info.email).first_or_initialize do |user|
            user.name = auth.info.name
            user.email = auth.info.email
        end
    end
end
