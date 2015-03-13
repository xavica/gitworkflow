function PoolA(team,matches,won,lost,tied,nr,pts,nrr)
{
	
	this.team=team;
	this.matches = matches;
	this.won=won;
	this.lost = lost;
	this.tied=tied;
	this.nr = nr;
	this.pts=pts;
	this.nrr = nrr;
};
function PoolB(team,matches,won,lost,tied,nr,pts,nrr){
	this.team=team;
	this.matches = matches;
	this.won=won;
	this.lost = lost;
	this.tied=tied;
	this.nr = nr;
	this.pts=pts;
	this.nrr = nrr;
}


function poolAResult(){

	this.resultsPoolA = [ 	new PoolA('New Zealand',5,5,0,0,0,10,'+3.090'),
							new PoolA('Sri Lanka',6,4,2,0,0,8,'+0.371'),
							new PoolA('Australia',5,3,1,0,1,7,'+1.597'),
							new PoolA('Bangladesh',5,3,1,0,1,7,'+0.211'),
							new PoolA('England',5,1,4,0,0,2,'-1.001'),
							new PoolA('Afghanistan',5,1,4,0,0,2,'-1.881'),
							new PoolA('Scotland',5,0,5,0,0,0,'-1.769'),
						];
	this.resultsPoolB = [	new PoolB('India',5,5,0,0,0,10,'+2.157'),
							new PoolB('South Africa',6,4,2,0,0,8,'+1.707'),
							new PoolB('Pakistan',5,3,2,0,0,6,'-0.194'),
							new PoolB('Ireland',5,3,2,0,0,6,'-1.014'),
							new PoolB('West Indies',5,2,3,0,0,4,'-0.511'),
							new PoolB('Zimbabwe',5,1,4,0,0,2,'-0.595'),
							new PoolB('UAE',5,0,5,0,0,0,'-1.961'),

						
						]
}
var m= new poolAResult();
ko.applyBindings(m);