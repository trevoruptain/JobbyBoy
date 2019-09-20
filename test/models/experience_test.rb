# == Schema Information
#
# Table name: experiences
#
#  id           :integer          not null, primary key
#  start        :string           not null
#  end          :string           not null
#  company_name :string           not null
#  user_id      :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class ExperienceTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
