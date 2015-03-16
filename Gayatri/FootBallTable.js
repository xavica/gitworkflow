function LeagueTable(position,imageUrl,team,played,won,draw,lost,score,points)
{
	this.position = position;
	this.imageUrl = imageUrl;
	this.team =team;
	this.played = played;
	this.won = won;
	this.draw = draw;
	this.lost = lost;
	this.score = score;
	this.points = points;

}
function League(leagueType,LeagueTable)
{
	this.leagueType = leagueType;
	this.LeagueTable = LeagueTable;
}


function FootballTableViewModel()
{
	this.Leagues = [ 

		new League("iLeague",[
			new LeagueTable(1,"3352.png","Mohun Bagan", 7,4,3,0,+7,15),
			new LeagueTable(2,"10635.png","Pune",8,4,3,1,+6,15),
			new LeagueTable(3,"25367.png","Bengaluru",9,4,2,3,+3,14),
			new LeagueTable(4,"18324.png","Royal Wahingdoh",8,4,1,3,-1,13),
			new LeagueTable(5,"3346.png","East Bengal",7,3,3,1,+4,12) ]),
	
		new League("premierLeague",[
			new LeagueTable(1,"3352.png","Mohun Bagan", 7,4,3,0,+7,15),
			new LeagueTable(2,"10635.png","Pune",8,4,3,1,+6,15),
			new LeagueTable(3,"25367.png","Bengaluru",9,4,2,3,+3,14),
			new LeagueTable(4,"18324.png","Royal Wahingdoh",8,4,1,3,-1,13),
			new LeagueTable(5,"3346.png","East Bengal",7,3,3,1,+4,12) ]),

		new League("serieLeague",[
			new LeagueTable(1,"3352.png","Mohun Bagan", 7,4,3,0,+7,15),
			new LeagueTable(2,"10635.png","Pune",8,4,3,1,+6,15),
			new LeagueTable(3,"25367.png","Bengaluru",9,4,2,3,+3,14),
			new LeagueTable(4,"18324.png","Royal Wahingdoh",8,4,1,3,-1,13),
			new LeagueTable(5,"3346.png","East Bengal",7,3,3,1,+4,12) ]) ;
}

ko.applyBindings(new FootballTable_ViewModel());