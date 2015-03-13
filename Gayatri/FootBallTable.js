function iLeagueTable(pos,image,team,p,w,d,l,score,pts)
{
	this.pos = pos;
	this.image = image;
	this.team =team;
	this.p = p;
	this.w = w;
	this.d = d;
	this.l = l;
	this.score = score;
	this.pts = pts;

}
function premierLeagueTable(pos,image,team,p,w,d,l,score,pts)
{
	this.pos = pos;
	this.image = image;
	this.team =team;
	this.p = p;
	this.w = w;
	this.d = d;
	this.l = l;
	this.score = score;
	this.pts = pts;

}
function serieLeagueTable(pos,image,team,p,w,d,l,score,pts)
{
	this.pos = pos;
	this.image = image;
	this.team =team;
	this.p = p;
	this.w = w;
	this.d = d;
	this.l = l;
	this.score = score;
	this.pts = pts;

}
function FootballTable_ViewModel()
{
	this.iLeague = [ 
		new iLeagueTable(1,"3352.png","Mohun Bagan", 7,4,3,0,+7,15),
		new iLeagueTable(2,"10635.png","Pune",8,4,3,1,+6,15),
		new iLeagueTable(3,"25367.png","Bengaluru",9,4,2,3,+3,14),
		new iLeagueTable(4,"18324.png","Royal Wahingdoh",8,4,1,3,-1,13),
		new iLeagueTable(5,"3346.png","East Bengal",7,3,3,1,+4,12)
	];
	this.premierLeague = [
			new premierLeagueTable(1,"3352.png","Mohun Bagan", 7,4,3,0,+7,15),
			new premierLeagueTable(2,"10635.png","Pune",8,4,3,1,+6,15),
			new premierLeagueTable(3,"25367.png","Bengaluru",9,4,2,3,+3,14),
			new premierLeagueTable(4,"18324.png","Royal Wahingdoh",8,4,1,3,-1,13),
			new premierLeagueTable(5,"3346.png","East Bengal",7,3,3,1,+4,12)
	];
	this.serieLeague = [
			new serieLeagueTable(1,"3352.png","Mohun Bagan", 7,4,3,0,+7,15),
			new serieLeagueTable(2,"10635.png","Pune",8,4,3,1,+6,15),
			new serieLeagueTable(3,"25367.png","Bengaluru",9,4,2,3,+3,14),
			new serieLeagueTable(4,"18324.png","Royal Wahingdoh",8,4,1,3,-1,13),
			new serieLeagueTable(5,"3346.png","East Bengal",7,3,3,1,+4,12)
	];
}

ko.applyBindings(new FootballTable_ViewModel());