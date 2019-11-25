# == Schema Information
#
# Table name: experiences
#
#  id           :bigint           not null, primary key
#  start_date   :string           not null
#  end_date     :string           not null
#  company_name :string           not null
#  user_id      :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class ExperienceTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
