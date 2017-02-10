$(document).ready(function(){
	var teamId;
	$("#leagueButton").on("click",function(){
		$.ajax({
			headers: { 'X-Auth-Token': 'c91357d71f904119b84ccc38728c95d9' },
			url:'http://api.football-data.org/v1/soccerseasons/',
			dataType: 'json',
			type: "GET",
		}).done(function(leagueResponse){
			// console.log(leagueResponse.length);
			for(var i = 0; i < leagueResponse.length; i++){
				var leagueName = leagueResponse[i].caption;
				teamId = leagueResponse[i].id;
			var leagueTable = '<tr><td><input type="button" onclick="'+myFunction(teamId)+'" href="#" class="btn btn-primary" id="'+ leagueResponse[i].id+'" name="'+ leagueName +'" value="'+ leagueResponse[i].caption +'"/> </td></tr>' ;
			$("tbody").append(leagueTable);
			console.log(teamId);
			
		}
		function myFunction(){
			// $("#teamResponse[i].id").on("click",function myFunction(){
		var urlString = 'http://api.football-data.org/v1/soccerseasons/'+leagueResponse[i].id+'/teams';
			$.ajax({
				headers: { 'X-Auth-Token': 'c91357d71f904119b84ccc38728c95d9' },
				url: urlString,
				dataType: 'json',
				type: "GET",
			}).done(function(teamResponse){
				console.log(teamResponse);
				for(var j = 0; j < teamResponse.teams.length; j++){
					var teamName = teamResponse.teams[j].name;
					console.log(teamName);
				}
			});
		}
		// $("myFunction").on("click",function(){
	});
	});
	});


 // 1. leagues names in caption and numberofteams play and total numberofgames.
 // 1.1 players names and full details, teams names and squad market value which was in every url of "teams href" .

 // 2. fixtures has date of game, status, homeTeam name, away team name, and result.
