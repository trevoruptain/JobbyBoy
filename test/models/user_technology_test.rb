# == Schema Information
#
# Table name: user_technologies
#
#  id            :bigint           not null, primary key
#  user_id       :integer
#  technology_id :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class UserTechnologyTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
