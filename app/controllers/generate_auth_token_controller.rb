class GenerateAuthTokenController < ApplicationController
    before_action :require_login
end
