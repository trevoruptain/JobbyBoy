require '../../keys/auth_keys.rb'

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, , auth_keys.key || ENV['GOOGLE_CLIENT_ID'], auth_keys.secret || ENV['GOOGLE_CLIENT_SECRET']
end

# Rails.application.config.middleware.use OmniAuth::Builder do
#   provider :google_oauth2, ENV['GOOGLE_CLIENT_ID'], ENV['GOOGLE_CLIENT_SECRET']
# end