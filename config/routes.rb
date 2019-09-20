Rails.application.routes.draw do
  root to: 'root#index'

  resources :users do
    resources :resumes
    resources :technologies
    resources :generate_auth_token, only: [:index]
    
    resources :experiences do 
      resources :experience_bullets, except: [:new, :edit]
    end

    resources :projects do
      resources :project_bullets, except: [:new, :edit]
    end
  end
  
  namespace :api, defaults: {format: :json} do
    resources :resumes, only: [:index]
  end
end
