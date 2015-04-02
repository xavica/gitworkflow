function TableHeaders(header)
{
	this.header=header;
};

function PointsTable(headers, tableData)
{ 
	this.headers=headers;
	this.tableData=tableData;
};
function TableData(team,matches,won,lost,tied,noResult,points,NetRunRate){
	this.team=team;
	this.matches = matches;
	this.won=won;
	this.lost = lost;
	this.tied=tied;
	this.noResult = noResult;
	this.points=points;
	this.NetRunRate = NetRunRate;
}

function CricBuzzViewModel()
{
	this.tables=[	new PointsTable(	
										[	new TableHeaders('PoolA'),
											new TableHeaders('Matches'),
											new TableHeaders('Won'),
											new TableHeaders('Lost'),
											new TableHeaders('No Result'),
											new TableHeaders('Points'),
											new TableHeaders('NetRunRate')
										] ,
										[	new TableData('New Zealand',5,5,0,0,0,10,'+3.090'),
											new TableData('Sri Lanka',6,4,2,0,0,8,'+0.371'),
											new TableData('Australia',5,3,1,0,1,7,'+1.597'),
											new TableData('Bangladesh',5,3,1,0,1,7,'+0.211'),
											new TableData('England',5,1,4,0,0,2,'-1.001'),
											new TableData('Afghanistan',5,1,4,0,0,2,'-1.881'),
											new TableData('Scotland',5,0,5,0,0,0,'-1.769')
										]
									),
					new PointsTable(		
										[	new TableHeaders('PoolB'),
											new TableHeaders('Matches'),
											new TableHeaders('Won'),
											new TableHeaders('Lost'),
											new TableHeaders('No Result'),
											new TableHeaders('Points'),
											new TableHeaders('NetRunRate')
										],
										[	new TableData('India',5,5,0,0,0,10,'+2.157'),
											new TableData('South Africa',6,4,2,0,0,8,'+1.707'),
											new TableData('Pakistan',5,3,2,0,0,6,'-0.194'),
											new TableData('Ireland',5,3,2,0,0,6,'-1.014'),
											new TableData('West Indies',5,2,3,0,0,4,'-0.511'),
											new TableData('Zimbabwe',5,1,4,0,0,2,'-0.595'),
											new TableData('UAE',5,0,5,0,0,0,'-1.961'),
										]
									)
				]
}
ko.applyBindings(new CricBuzzViewModel());