class PagesController < ApplicationController

  def home
    @title = "Home"
  end

  def health
    @title = "My health manifesto"
  end

  def guide
    @title = "Guide"
  end
end
