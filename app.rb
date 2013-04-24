require 'rubygems'
require 'sinatra'
require 'haml'
require 'json'

get "/" do
  haml :index
end

get '/view1' do
  haml :view1
end

get '/view2' do
  haml :view2
end
