# == Schema Information
#
# Table name: projects
#
#  id          :bigint           not null, primary key
#  title       :string
#  description :string
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Project < ApplicationRecord
    validates :title, :user_id, :description, presence: true

    belongs_to :user

    has_many :project_bullets, dependent: :destroy
end
