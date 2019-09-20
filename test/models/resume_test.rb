# == Schema Information
#
# Table name: resumes
#
#  id              :integer          not null, primary key
#  title           :string           not null
#  primary_color   :string           not null
#  secondary_color :string           not null
#  user_id         :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class ResumeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
