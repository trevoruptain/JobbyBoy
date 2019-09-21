# == Schema Information
#
# Table name: user_technologies
#
#  id            :bigint           not null, primary key
#  user_id       :integer
#  technology_id :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class UserTechnology < ApplicationRecord
    validates :user_id, :technology_id, presence: true

    belongs_to :user 
    belongs_to :technology
end
