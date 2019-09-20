# == Schema Information
#
# Table name: resumes
#
#  id              :bigint           not null, primary key
#  title           :string           not null
#  primary_color   :string           not null
#  secondary_color :string           not null
#  user_id         :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Resume < ApplicationRecord
    validates :title, :primary_color, :secondary_color, presence: true

    belongs_to :user
    
    has_many :experiences
end
