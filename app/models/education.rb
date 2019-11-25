# == Schema Information
#
# Table name: educations
#
#  id            :bigint           not null, primary key
#  school        :string
#  year          :integer
#  concentration :string
#  user_id       :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Education < ApplicationRecord
    validates :school, :year, :user_id, presence: true

    belongs_to :user
end
