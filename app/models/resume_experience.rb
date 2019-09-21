# == Schema Information
#
# Table name: resume_experience
#
#  id         :bigint           not null, primary key
#  resume_id  :string           not null
#  experience_id :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ResumeExperience < ApplicationRecord
    validates :resume_id, :experience_id, presence: true

    belongs_to :resume
    belongs_to :experience
end
