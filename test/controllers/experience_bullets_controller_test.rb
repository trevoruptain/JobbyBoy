require 'test_helper'

class ExperienceBulletsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get experience_bullets_create_url
    assert_response :success
  end

  test "should get update" do
    get experience_bullets_update_url
    assert_response :success
  end

  test "should get index" do
    get experience_bullets_index_url
    assert_response :success
  end

  test "should get show" do
    get experience_bullets_show_url
    assert_response :success
  end

  test "should get destroy" do
    get experience_bullets_destroy_url
    assert_response :success
  end

end
