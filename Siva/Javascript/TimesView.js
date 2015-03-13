function Items(description, item)
{
	this.description=description;
	this.item=item;
}
function Section(name,items)
{
	this.name=name;
	this.items=items;
}
function TimesViewModel()
{
		this.sections= [	new Section('Top Stories',	[	new Items("'Islamabad high court has termed Mumbai attacks mastermind Zakiur Rehman Lakhvi's detention illegal and ordered his release,'",
																	"'Zakiur Rehman Lakhvi's detention illegal, release him: Islamabad HC"),
															new Items('Kerala Finance Minister K.M. Mani on Friday presented the 13th state budget amid ruckus created by members of the Left opposition who are demanding his resignation.',
																	' Kerala: Budget presented amid ruckus in assembly'),
															new Items("The government is looking at sweeping changes to the law governing Employees Provident Fund (EPF) and has suggested doing away with the mandatory 12% contribution by employees in certain cases, while retaining the outgo for employers",
																	"Govt plans radical changes to EPF law "),
															new Items("","Activist shows banned Nirbhaya film in Delhi slum"),
															new Items("","2/3 of sewage from 118 towns flows into Ganga"),
															new Items("","BJP drops Irani, Hema, Najma from core team"),
															new Items("","InMobi finds a mentor in Nilekani"),
															new Items("","Leakgate spreads to 2 other ministries, 3 held"),
															new Items("","IIT graduate kills kin fearing HIV infection"),
															new Items("","Swine flu more dangerous than before: MIT study"),
															new Items("","Coal block auction shows CAG got figure right")
														]
										),

							new Section('Other Stories',[	new Items('','Akshay Kumar beats Salman, Shah Rukh Khan'),								
															new Items('',' After the slap, now Deepika- Anas patch up'),
															new Items("","Rajkummar Rao and Patralekha's PDA")
														]
										),

						 	new Section('India',	[	new Items('','PM Modi arrives in Lanka as final stop of his 3-nation tour'),
														new Items('',' Gandhian from Bangladesh gets peace prize'),
														new Items("","Underage couples utilize Kerala govt's waiver")
													]
										),

							new Section('City',		[	new Items('','HIV+ve student barred from attending college'),
														new Items('',"Our technical solutions will end red-tapism"),
														new Items("","Nine arrested for attack on Africans in Bengaluru")
													]
										),

						 	new Section('Entertainment',[	new Items('',"Pneumonia-struck Dilip Kumar 'fine now'")
						 								]
						 				),

							new Section('Tech',			[	new Items('',"Xiaomi Redmi 2 launched in India: First look"),
															new Items('',' Pakistani cybersecurity firm stealing Indian bureaucrats’ data: FireEye')
														]
										),

						 	new Section('World',		[	new Items('','Abu Bakr al-Baghdadi accepts allegiance of Boko Haram'),
															new Items('','Obama calls Ghani, commends effort to improve ties with Pak'),
															new Items("","Airport shut as Costa Rica volcano spews more ash")
														]
										),

							new Section('Buisiness',	[	new Items('','Sensex regains 29,000-mark, up 253 points'),
															new Items('',' Oil prices rebound in Asia'),
															new Items("","Rupee gains 7 paise against US dollar")
														]
										),

						 	new Section('Sports',		[	new Items('','World Cup: Less training, more focus for India in Auckland'),
															new Items('',' WC: Ton-up Mahmudullah steers Bangladesh to 288/7'),
															new Items("","Novak Djokovic still chasing elusive French Open title")
														]
										),

							new Section('Life & Style',	[	new Items('','Is your sex technique right?'),
															new Items('',' Soul Curry: Hunger​, t​he eye opener'),
															new Items("","Makeup melt-proof tricks you ought to try")
														]
										)
						];
											
}
				

ko.applyBindings(new TimesViewModel());