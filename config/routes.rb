Rails.application.routes.draw do
  root to: 'root#index'

  # omniauth routes
  get 'auth/:provider/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/')

  resources :users, except: [:new, :edit, :index] do
    resources :resumes, except: [:new, :edit]
    resources :technologies, only: [:create, :index, :show]
    resources :generate_auth_token, only: [:index]

    resources :experiences, except: [:new, :edit, :index] do 
      resources :experience_bullets, except: [:new, :edit, :index]
    end

    resources :projects, except: [:new, :edit, :index] do
      resources :project_bullets, except: [:new, :edit, :index]
    end
  end
  
  namespace :api, defaults: {format: :json} do
    resources :resumes, only: [:index]
  end
end
