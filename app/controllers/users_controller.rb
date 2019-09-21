class UsersController < ApplicationController
  # before_action :require_login
  # skip_before_action :create

  def create
    @user = User.new(user_params)

    if @user.save!
      render :show
    else
      render json: @user.errors.full_messages, status: 400
    end
  end

  def update
    @user = current_user

    if @user
      if @user.update(user_params)
        render :show
      else
        render json: @user.errors.full_messages, status: 400
      end
    else
      render json: ["That user does not exist"], status: 404
    end
  end

  def show
    @user = current_user
    render :show
  end

  def destroy
    @user = current_user

    if @user.destroy!
      render json: ["User successfully deleted"], status: 200
    else
      render json: @user.errors.full_messages
    end
  end

  private
  def user_params
    params.require(:user).permit(:name, :email, :phone, :address, :objective)
  end
end
