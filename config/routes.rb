Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'stores/index'
      post 'stores/create'
      get '/stores/show/:id', to: 'stores#show'
      put '/stores/update', to: 'stores#update'
      post 'stores/upload'
      post'stores/import'
      get 'stores/export'
      delete '/stores/destroy/:id', to: 'stores#destroy'
      delete '/stores/bulk_destroy/:ids', to: 'stores#bulk_destroy'
      get '/stores/filter', to: 'stores#filter'
    end
  end

  root to: 'home#index'
  get '/new-store', to: 'home#index'
  get '/update-store', to: 'home#index'
  get '/import', to: 'home#index'
  mount ShopifyApp::Engine, at: '/'
end
