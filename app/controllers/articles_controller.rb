class ArticlesController < ApplicationController
  def index
    @articles = Article.order("id DESC")
    @article = Article.new
  end

  def new
  end

  def create
    article = Article.new(article_params)
    if article.save
      #redirect_to index 下部追記したら削除する
      render json: {article: article} #JSON形式でレスポンスを返すように、コントローラーで設定をする
    end
  end

  private
  def article_params
    params.require(:article).permit(:text)
  end
end
