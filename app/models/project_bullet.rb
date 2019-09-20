# == Schema Information
#
# Table name: project_bullets
#
#  id         :integer          not null, primary key
#  project_id :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ProjectBullet < ApplicationRecord
    belongs_to :project 
end
