# == Schema Information
#
# Table name: educations
#
#  id         :bigint           not null, primary key
#  school     :string
#  year       :integer
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class EducationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end