require 'rubygems'
require 'sinatra'
require 'json'

get "/" do
  haml :index
end