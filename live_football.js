$(document).ready(function(){
	// var urlString = "http://api.football-data.org/v1/soccerseasons/";
	$.ajax({
		headers: { 'X-Auth-Token': 'c91357d71f904119b84ccc38728c95d9' },
		url:'http://api.football-data.org/v1/soccerseasons/',
		dataType: 'json',
		type: "GET",
	}).done(function(response){
		console.log(response);
		for(var i = 0; i < response.length; i++){
			var teamName = response[i].caption;
			console.log(teamName);
			$('multiLeagues').append(teamName);
		}
			});
});