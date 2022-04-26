Rails.application.routes.draw do
  devise_for :users
  devise_scope :users do
    get '/users/sign_out' => 'devise/sessions#destroy'

    root "projects#index"
    resources :projects
    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  end
end


