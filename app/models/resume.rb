# == Schema Information
#
# Table name: resumes
#
#  id              :bigint           not null, primary key
#  company_name    :string           not null
#  title           :string           not null
#  url             :string           not null
#  description     :text             not null
#  font            :string           not null
#  primary_color   :string           not null
#  secondary_color :string           not null
#  user_id         :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Resume < ApplicationRecord
    validates :title, :primary_color, :secondary_color, :user_id, presence: true

    belongs_to :user
    
    has_many :resume_experiences
    has_many :resume_projects
    has_many :experiences, through: :resume_experiences
    has_many :projects, through: :resume_projects
end
