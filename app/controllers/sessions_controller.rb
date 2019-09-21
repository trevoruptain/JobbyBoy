class SessionsController < ApplicationController
    def create
        # Get access tokens from the google server
        access_token = request.env["omniauth.auth"]
        user = User.from_omniauth(access_token)
        login!(user)
        # Access_token is used to authenticate request made from the rails application to the google server
        user.google_token = access_token.credentials.token
        # Refresh_token to request new access_token
        # Note: Refresh_token is only sent once during the first request
        refresh_token = access_token.credentials.refresh_token
        user.google_refresh_token = refresh_token if refresh_token.present?
        user.save
        redirect_to root_path
    end

    def destroy
        @user = current_user

        if @user
            logout
            redirect_to new_session_url
        else
            render json: ["There is nobody signed in"], status: 404
        end
    end
end
