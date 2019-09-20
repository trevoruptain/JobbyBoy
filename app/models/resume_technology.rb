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
end
