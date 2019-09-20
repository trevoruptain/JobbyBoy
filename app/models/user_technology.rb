# == Schema Information
#
# Table name: user_technologies
#
#  id            :integer          not null, primary key
#  user_id       :integer
#  technology_id :string
#  name          :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class UserTechnology < ApplicationRecord
    belongs_to :user 
    belongs_to :technology
end
