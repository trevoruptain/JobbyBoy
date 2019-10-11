class TechnologiesController < ApplicationController
  # before_action :require_login
  skip_before_action :verify_authenticity_token

  def create
    @technology = Technology.new(technology_params)
    if @technology.save!
      # user_technology = UserTechnology.new({
      #   user_id: current_user.id
      #   technology_id: @technology.id
      # })

      render :show 
    else
      render json: @technology.errors.full_messages
    end
  end

  def index
    @technologies = Technology.first(20)
    render :index
  end

  def show
    @technology = Technology.find(params[:id])
    render :show
  end

  private
  def technology_params
    params.require(:technology).permit(:name)
  end
end
