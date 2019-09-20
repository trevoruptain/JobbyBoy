# == Schema Information
#
# Table name: resume_projects
#
#  id         :bigint           not null, primary key
#  resume_id  :string           not null
#  project_id :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ResumeProject < ApplicationRecord
    validates :resume_id, :project_id, presence: true

    belongs_to :resume
    belongs_to :project
end
