require 'test_helper'

class ProjectBulletsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get project_bullets_create_url
    assert_response :success
  end

  test "should get update" do
    get project_bullets_update_url
    assert_response :success
  end

  test "should get index" do
    get project_bullets_index_url
    assert_response :success
  end

  test "should get show" do
    get project_bullets_show_url
    assert_response :success
  end

  test "should get destroy" do
    get project_bullets_destroy_url
    assert_response :success
  end

end
