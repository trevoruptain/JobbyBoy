# == Schema Information
#
# Table name: experience_bullets
#
#  id            :bigint           not null, primary key
#  experience_id :integer          not null
#  body          :text             not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class ExperienceBullet < ApplicationRecord
    belongs_to :experience
end
