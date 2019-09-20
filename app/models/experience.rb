# == Schema Information
#
# Table name: experiences
#
#  id           :integer          not null, primary key
#  start        :string           not null
#  end          :string           not null
#  company_name :string           not null
#  user_id      :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Experience < ApplicationRecord
    validates :start, :end, :company_name, presence: true

    belongs_to :resume
    
    has_many :experience_bullets
end
