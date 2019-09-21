class TechnologiesController < ApplicationController
  before_action :require_login

  def create
    @technology = Technology.new(technology_params)

    if @technology.save!
      UserTechnology.create!(
        user_id: current_user.id
        technology_id: @technology.id
      )

      render :show 
    else
      render json: @technology.errors.full_messages
    end
  end

  def index
    @technologies = Technology.all
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
