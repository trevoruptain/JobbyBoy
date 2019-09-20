# == Schema Information
#
# Table name: experience_bullets
#
#  id            :integer          not null, primary key
#  experience_id :integer          not null
#  body          :text             not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class ExperienceBulletTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
