class ApplicationController < ActionController::Base
    helper_method :current_user, :logged_in?

    private

    def current_user
        # return nil unless request.env["omniauth.auth"]
        # @current_user ||= User.find_by(google_refresh_token: request.env["omniauth.auth"])
        return User.first
    end

    def logged_in?
        !!current_user
    end

    def login!(user)
        access_token = request.env["omniauth.auth"]
        user.google_refresh_token = access_token.credentials.refresh_token
        @current_user = user
    end

    def logout
        access_token = request.env["omniauth.auth"]
        access_token.credentials.refresh_token
        user.google_refresh_token = nil
        request.env["omniauth.auth"] = nil
        @current_user = nil
    end

    def require_logged_in
        unless current_user
            render json: { base: ['invalid credentials'] }, status: 401
        end
    end
end
