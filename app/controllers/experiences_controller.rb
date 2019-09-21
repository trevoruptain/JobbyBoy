class ExperiencesController < ApplicationController
  # before_action :require_login

  def create
    @experience = Experience.new(experience_params)
    @experience.user_id = current_user.id

    if @experience.save!
      render :show 
    else
      render json: @experience.errors.full_messages
    end
  end

  def update
    @experience = current_user.experiences.find(params[:id])

    if @experience
      if @experience.update(experience_params)
        render :show
      else
        render json: @experience.errors.full_messages, status: 400
      end
    else
      render json: ["That experience does not exist"], status: 404
    end
  end

  def index
    @experiences = current_user.experiences.all
    render :index
  end

  def show
    @experience = current_user.experiences.find(params[:id])
    render :show
  end

  def destroy
    @experience = current_user.experiences.find(params[:id])

    if @experience.destroy!
      render json: ["Experience successfully deleted"], status: 200
    else
      render json: @experience.errors.full_messages
    end
  end

  private
  def experience_params
    params.require(:experience).permit(:start_date, :end_date, :company_name)
  end
end
