# == Schema Information
#
# Table name: resume_technologies
#
#  id            :bigint           not null, primary key
#  resume_id     :string
#  technology_id :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class ResumeTechnology < ApplicationRecord
    validates :resume_id, :technology_id, presence: true

    belongs_to :resume
    belongs_to :technology
end
