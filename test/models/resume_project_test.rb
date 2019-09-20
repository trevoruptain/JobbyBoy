# == Schema Information
#
# Table name: resume_projects
#
#  id         :bigint           not null, primary key
#  resume_id  :string           not null
#  project_id :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class ResumeProjectTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
