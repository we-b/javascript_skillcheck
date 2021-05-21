Rails.application.routes.draw do
  root 'articles#index'
  # resources :articles, expect: :create #この記述を行うと、投稿時にcreateアクションへのルーティングが見つからず(=リクエストの送信先が見つからない)、404エラー(=クライアント側のエラー)となる。今回はこのエラーが発生したときにアラートが表示されるようにする→確認したのでコメントアウト
  resources :articles #上で仕込んだエラーを元に戻す
end
