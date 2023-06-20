Rails.application.routes.draw do
  root 'articles#index'
  resources :articles#, except: :create 投稿時にcreateアクションへのルーティングが見つからず、404のエラーとなります。エラー確認したら削除する
end
