$(document).ready(function(){
	var teamFixing;
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
				console.log(leagueName);
				teamId = leagueResponse[i].id;
				teamFixing = leagueResponse[i]._links.fixtures.href;	
				console.log(teamFixing);
			// var leagueTable = '<tr><td><input type="button" onclick="myFunction('+leagueResponse[i].id+')" href="#" class="btn btn-primary" id="'+ leagueResponse[i].id+'" name="'+ leagueName +'" value="'+ leagueResponse[i].caption +'"/> </td></tr>' ;
			var leagueTable = '<div class="col-md-4 col-md-offset-2"> <a href="league_teams.html" onclick="teamPlayer('+leagueResponse[i].id+')"  class="waves-effect waves-light btn" style="height:40px;width:350px">'+leagueResponse[i].caption +'</a> </div>' ;
			var fixtureTable = '<div class="col-md-offset-2 col-md-4"> <a href="league_fixture.html" onclick="teamFix('+leagueResponse[i].id+')" class="waves-effect waves-light btn" style="height:40px">Fixtures</a> </div>' ;
			$("#leagued").append(leagueTable);
			$("#fixed").append(fixtureTable);
			var data = '<div>'+leagueTable+fixtureTable+'</div>'
			console.log(data);
			$("#homeView").append(data);
		}
	});
	});
	});

	function teamPlayer(val){
		localStorage.setItem("playerIndex",val)
	}
	var teamIdVal = localStorage.getItem("playerIndex");
	console.log(teamIdVal);
	if(teamIdVal !== (undefined||null)){
		 (function(){
				// $("#teamResponse[i].id").on("click",function myFunction(){
			var urlString = 'http://api.football-data.org/v1/soccerseasons/'+teamIdVal+'/teams';
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
						var teamTable = '<tr><td> <input type="button" class="waves-effect waves-light btn" value="'+ teamResponse.teams[j].name +'"/></td></tr>' ;
							$("#teamed").append(teamTable);
			// $("tbody").append(teamTable);
					}
				});
			})(teamIdVal);
	}

	function teamFix(val){
		localStorage.setItem("playernameIndex",val)
	}

	var teamFixingVal = localStorage.getItem("playernameIndex");
	console.log(teamFixingVal);
	if(teamFixingVal !== (undefined||null)){
		 (function(){
				// $("#teamResponse[i].id").on("click",function myFunction(){
					var urlNewString = 'http://api.football-data.org/v1/soccerseasons/'+teamFixingVal+'/fixtures';
				$.ajax({
					headers: { 'X-Auth-Token': 'c91357d71f904119b84ccc38728c95d9' },
					url: urlNewString,
					dataType: 'json',
					type: "GET",
				}).done(function(gameResponse){
					console.log(gameResponse);
					for(var k = 0; k < gameResponse.fixtures.length; k++){
						var homeTeamName = gameResponse.fixtures[k].homeTeamName;
						console.log(homeTeamName);
						var awayTeamName = gameResponse.fixtures[k].awayTeamName;
						console.log(awayTeamName);
						var goalsAwayTeam = gameResponse.fixtures[k].result.goalsAwayTeam;
						console.log(goalsAwayTeam);
						var goalsHomeTeam = gameResponse.fixtures[k].result.goalsHomeTeam;
						console.log(goalsHomeTeam);
						var status = gameResponse.fixtures[k].status;
						console.log(status);
						console.log(gameResponse.fixtures[k].result);
						var cardTeamName = '<div id="newDiv">' + gameResponse.fixtures[k].homeTeamName +'      vs      '+ gameResponse.fixtures[k].awayTeamName +'</div>' ;
						// $(".card-title").append(cardTeamName);
						// var pointTab =	'<div id="tabDiv">'+'<br>  Points:   '+ gameResponse.fixtures[k].result.goalsHomeTeam + '-' +gameResponse.fixtures[k].result.goalsAwayTeam +'<br>  Game Status:   '+ gameResponse.fixtures[k].status+'</div>'
						// $(".para").append(pointTab);
						var teamNameTable = '<div id="sepDiv">' + gameResponse.fixtures[k].homeTeamName +'      vs      '+ gameResponse.fixtures[k].awayTeamName +'<br>  Points:   '+ gameResponse.fixtures[k].result.goalsHomeTeam + '-' +gameResponse.fixtures[k].result.goalsAwayTeam +'<br>  Game Status:   '+ gameResponse.fixtures[k].status+'</div>' ;
							$(".white-text").append(teamNameTable);

			// $("tbody").append(teamTable);
					}
				});
			})(teamFixingVal);
	}
 // 1. leagues names in caption and numberofteams play and total numberofgames.
 // 1.1 players names and full details, teams names and squad market value which was in every url of "teams href" .

 // 2. fixtures has date of game, status, homeTeam name, away team name, and result.
