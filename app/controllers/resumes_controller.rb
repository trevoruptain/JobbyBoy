class ResumesController < ApplicationController
  before_action :require_login

  def create
    @resume = Resume.new(resume_params)

    if @resume.save!
      render :show 
    else
      render json: @resume.errors.full_messages
    end
  end

  def update
    @resume = current_user.resumes.find(params[:id])

    if @resume
      if @resume.update(resume_params)
        render :show
      else
        render json: @resume.errors.full_messages, status: 400
      end
    else
      render json: ["That resume does not exist"], status: 404
    end
  end

  def index
    @resumes = current_user.resumes.all
    render :index
  end

  def show
    @resume = current_user.resumes.find(params[:id])
    render :show
  end

  def destroy
    @resume = current_user.resumes.find(params[:id])

    if @resume.destroy!
      render json: ["Resume successfully deleted"], status: 200
    else
      render json: @resume.errors.full_messages
    end
  end

  private
  def resume_params
    params.require(:resume).permit(:title, :primary_color, :secondary_color)
  end
end
