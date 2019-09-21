class ApplicationController < ActionController::Base
    helper_method :current_user, :logged_in?

    private

    def current_user
        return nil unless request.env["omniauth.auth"]
        @current_user ||= User.find_by(google_refresh_token: request.env["omniauth.auth"])
    end

    def logged_in?
        !!current_user
    end

    def login!(user)
        user.reset_session_token!
        session[:session_token] = user.session_token
        @current_user = user
    end

    def logout
        access_token = request.env["omniauth.auth"]
        access_token.credentials.refresh_token
        user.google_refresh_token
        request.env["omniauth.auth"] = nil
        @current_user = nil
    end

    def require_logged_in
        unless current_user
            render json: { base: ['invalid credentials'] }, status: 401
        end
    end
end
