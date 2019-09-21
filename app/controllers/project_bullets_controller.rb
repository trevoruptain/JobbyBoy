class ProjectBulletsController < ApplicationController
  before_action :require_login
  
  def create
    @project_bullet = ProjectBullet.new(project_bullet_params)

    if @project_bullet.save!
      render :show 
    else
      render json: @project_bullet.errors.full_messages
    end
  end

  def update
    @project_bullet = current_user.project_bullets.find(params[:id])

    if @project_bullet
      if @project_bullet.update(project_bullet_params)
        render :show
      else
        render json: @project_bullet.errors.full_messages, status: 400
      end
    else
      render json: ["That project_bullet does not exist"], status: 404
    end
  end

  def index
    @project_bullets = current_user.project_bullets.all
    render :index
  end

  def show
    @project_bullet = current_user.project_bullets.find(params[:id])
    render :show
  end

  def destroy
    @project_bullet = current_user.project_bullets.find(params[:id])

    if @project_bullet.destroy!
      render json: ["Experience bullet successfully deleted"], status: 200
    else
      render json: @project_bullet.errors.full_messages
    end
  end

  private
  def project_bullet_params
    params.require(:project_bullet).permit(:experience_id, :body)
  end
end
