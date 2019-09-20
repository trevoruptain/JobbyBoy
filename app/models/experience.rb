# == Schema Information
#
# Table name: experiences
#
#  id           :bigint           not null, primary key
#  start_date   :string           not null
#  end_date     :string           not null
#  company_name :string           not null
#  user_id      :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Experience < ApplicationRecord
    validates :start_date, :end_date, :company_name, presence: true

    belongs_to :user
    
    has_many :experience_bullets
end
