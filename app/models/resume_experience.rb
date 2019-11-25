# == Schema Information
#
# Table name: resume_experiences
#
#  id            :bigint           not null, primary key
#  resume_id     :integer          not null
#  experience_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class ResumeExperience < ApplicationRecord
    validates :resume_id, :experience_id, presence: true

    belongs_to :resume
    belongs_to :experience
end
