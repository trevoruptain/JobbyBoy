# == Schema Information
#
# Table name: project_bullets
#
#  id         :bigint           not null, primary key
#  project_id :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class ProjectBulletTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
