# == Schema Information
#
# Table name: users
#
#  id                   :bigint           not null, primary key
#  name                 :string           not null
#  email                :string           not null
#  phone                :string           not null
#  address              :string           not null
#  objective            :string           not null
#  google_token         :string           not null
#  string               :string           not null
#  google_refresh_token :string           not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
