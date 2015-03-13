function players(pos,image,pname,rating,best_rank)
{
	this.pos = pos;
	this.image = image;
	this.pname = pname;
	this.rating = rating;
	this.best_rank = best_rank;
}
function RankingViewModel()
{
	this.persons = [ 

		new players("1-","104.jpg","Kumar Sangakkara","909","1"),
		new players("2-","370.jpg","AB De Villiers","908","1"),
		new players("3-","314.jpg","Hashim Amla","891","1"),
		new players("4-","2250.jpg","Steven Smith","873","4"),
		new players("5-","1629.jpg","Angelo Mathews","841","3"),
		new players("6-","6326.jpg","Kane Williamson","839","6"),
		new players("7-","244.jpg","Shivnarine Chanderpaul","873","1"),
		new players("8-","130.jpg","Younis Khan","873","1"),
		new players("9-","1739.jpg","David Warner","805","3"),
		new players("10-","8019.jpg","Joe Root","789","8"),

	];
}

var rank = new RankingViewModel();
ko.applyBindings(rank);

