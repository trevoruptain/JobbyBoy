# == Schema Information
#
# Table name: resumes
#
#  id              :bigint           not null, primary key
#  company_name    :string           not null
#  title           :string           not null
#  url             :string           not null
#  description     :text             not null
#  font            :string           not null
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
