# == Schema Information
#
# Table name: resume_experiences
#
#  id            :bigint           not null, primary key
#  resume_id     :integer
#  experience_id :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class ResumeExperienceTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
