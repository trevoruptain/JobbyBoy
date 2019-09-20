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
    validates :experience_id, :body, presence: true

    belongs_to :experience
end
