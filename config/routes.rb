Rails.application.routes.draw do
  devise_for :users
  root 'groups#index'
  resources :users, only: [:index, :edit, :update, :show]
  resources :groups, only: [:new, :create, :edit, :update] do
  resources :messages, only: [:index, :create, :edit, :show]
  end
end