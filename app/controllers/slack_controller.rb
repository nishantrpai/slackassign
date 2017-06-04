class SlackController < ApplicationController
	def index

		@code = params[:code]
		@redirect = false
		@access = session[:access_code]
		@name = session[:team_name]

		if session[:access_code] == nil
			if @code != nil
				@request_url = 'https://slack.com/api/oauth.access?redirect_uri=http://localhost:8000&client_id=191649237506.193113640055&client_secret=6f8e3bc29efe17fa366678af17171caa&code='+@code
				@request = HTTParty.get(@request_url, :headers =>{'Content-Type' => 'application/json'})
				@access = @request["access_token"]
				@name = @request["team_name"]
				session[:access_code] = @access
				gon.access = @access
				session[:team_name] = @name
				get_channels
			
			end
		else
			get_channels		
		end


	end

	def get_channels
		@data = 'token=' + session[:access_code]  + '&exclude_archived=false&exclude_members=false'
		@headers = { 'Content-Type' => 'application/x-www-form-urlencoded' }
		@request = HTTParty.post("https://slack.com/api/channels.list?" + @data,@headers)
		@channels = @request["channels"]
		gon.channels = @channels
		gon.access = @access
	end
end
