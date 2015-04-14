function Players(position,imageUrl,playerName,rating,bestRank)
{
	this.position = position;
	this.imageUrl = imageUrl;
	this.playerName = playerName;
	this.rating = rating;
	this.bestRank = bestRank;
}
function RankingViewModel()
{
	this.person = [ 
		new Players("1-","104.jpg","Kumar Sangakkara","909","1"),
		new Players("2-","370.jpg","AB De Villiers","908","1"),
		new Players("3-","314.jpg","Hashim Amla","891","1"),
		new Players("4-","2250.jpg","Steven Smith","873","4"),
		new Players("5-","1629.jpg","Angelo Mathews","841","3"),
		new Players("6-","6326.jpg","Kane Williamson","839","6"),
		new Players("7-","244.jpg","Shivnarine Chanderpaul","873","1"),
		new Players("8-","130.jpg","Younis Khan","873","1"),
		new Players("9-","1739.jpg","David Warner","805","3"),
		new Players("10-","8019.jpg","Joe Root","789","8"),

	];
}

var rank = new RankingViewModel();
ko.applyBindings(rank);

