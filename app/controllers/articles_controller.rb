class ArticlesController < ApplicationController
  def index
    @articles = Article.order("id DESC")
    @article = Article.new
  end

  def new
  end

  def create
    article = Article.new(article_params)
    #article = Article.create(content: params[:content]) #textカラム取得？afterbeginどこに書くんだ？
    #render json:{post: post} #render jsonかな ?
    if article.save
      redirect_to index 
    end
  end

  private
  def article_params
    params.require(:article).permit(:text)
  end
end
