# == Schema Information
#
# Table name: user_technologies
#
#  id            :bigint           not null, primary key
#  user_id       :integer          not null
#  technology_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class UserTechnologyTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
