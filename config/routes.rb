Paulmederos::Application.routes.draw do

  match '/:action' => 'pages#:action'

  root :to => 'pages#home'

end
