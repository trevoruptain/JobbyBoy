class ExperienceBulletsController < ApplicationController
  # before_action :require_login

  def create
    @experience_bullet = ExperienceBullet.new(experience_bullet_params)

    if @experience_bullet.save!
      render :show 
    else
      render json: @experience_bullet.errors.full_messages
    end
  end

  def update
    @experience_bullet = current_user.experience_bullets.find(params[:id])

    if @experience_bullet
      if @experience_bullet.update(experience_bullet_params)
        render :show
      else
        render json: @experience_bullet.errors.full_messages, status: 400
      end
    else
      render json: ["That experience_bullet does not exist"], status: 404
    end
  end

  def index
    @experience_bullets = current_user.experience_bullets.all
    render :index
  end

  def show
    @experience_bullet = current_user.experience_bullets.find(params[:id])
    render :show
  end

  def destroy
    @experience_bullet = current_user.experience_bullets.find(params[:id])

    if @experience_bullet.destroy!
      render json: ["Experience bullet successfully deleted"], status: 200
    else
      render json: @experience_bullet.errors.full_messages
    end
  end

  private
  def experience_bullet_params
    params.require(:experience_bullet).permit(:experience_id, :body)
  end
end
