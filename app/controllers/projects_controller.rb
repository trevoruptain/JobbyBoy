class ProjectsController < ApplicationController
  # before_action :require_login

  def create
    @project = Project.new(project_params)
    @project.user_id = current_user.id

    if @project.save!
      render :show 
    else
      render json: @project.errors.full_messages
    end
  end

  def update
    @project = current_user.projects.find(params[:id])

    if @project
      if @project.update(project_params)
        render :show
      else
        render json: @project.errors.full_messages, status: 400
      end
    else
      render json: ["That project does not exist"], status: 404
    end
  end

  def index
    @projects = current_user.projects.all
    render :index
  end

  def show
    @project = current_user.projects.find(params[:id])
    render :show
  end

  def destroy
    @project = current_user.projects.find(params[:id])

    if @project.destroy!
      render json: ["project successfully deleted"], status: 200
    else
      render json: @project.errors.full_messages
    end
  end

  private
  def project_params 
    params.require(:project).permit(:title)
  end
end
