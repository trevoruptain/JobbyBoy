class EducationsController < ApplicationController
  # before_action :require_login

  def create
    @education = Education.new(education_params)
    @education.user_id = current_user.id

    if @education.save!
      render :show 
    else
      render json: @education.errors.full_messages
    end
  end

  def update
    @education = current_user.educations.find(params[:id])

    if @education
      if @education.update(education_params)
        render :show
      else
        render json: @education.errors.full_messages, status: 400
      end
    else
      render json: ["That education does not exist"], status: 404
    end
  end

  def index
    @educations = current_user.educations.all
    render :index
  end

  def show
    @education = current_user.educations.find(params[:id])
    render :show
  end

  def destroy
    @education = current_user.educations.find(params[:id])

    if @education.destroy!
      render json: ["Education successfully deleted"], status: 200
    else
      render json: @education.errors.full_messages
    end
  end

  private
  def education_params 
    params.require(:education).permit(:school, :year, :concentration)
  end
end
