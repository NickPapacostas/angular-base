require 'bundler/setup'
require 'sinatra'
require 'compass'
require 'haml'

set :app_file, __FILE__
set :root, File.dirname(__FILE__)
set :views, "views"


configure do
  Compass.add_project_configuration(File.join(Sinatra::Application.root, 'config', 'compass.config'))
end

# at a minimum, the main sass file must reside within the ./views directory. here, we create a ./views/stylesheets directory where all of the sass files can safely reside.
get '/css/:name.css' do
  content_type 'text/css', :charset => 'utf-8'
  scss(:"stylesheets/#{params[:name]}")
end

get "/" do
  haml :index
end

get '/view1' do
  haml :view1
end

get '/view2' do
  haml :view2
end
