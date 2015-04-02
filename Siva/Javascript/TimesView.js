function Item(description, itemName)
{
	this.description=description;
	this.itemName=itemName;
}
function Section(name,items)
{
	this.name=name;
	this.items=items;
}
function TimesViewModel()
{
		this.sections= [	new Section('Top Stories',	[	new Item("'Islamabad high court has termed Mumbai attacks mastermind Zakiur Rehman Lakhvi's detention illegal and ordered his release,'",
																	"'Zakiur Rehman Lakhvi's detention illegal, release him: Islamabad HC"),
															new Item('Kerala Finance Minister K.M. Mani on Friday presented the 13th state budget amid ruckus created by members of the Left opposition who are demanding his resignation.',
																	' Kerala: Budget presented amid ruckus in assembly'),
															new Item("The government is looking at sweeping changes to the law governing Employees Provident Fund (EPF) and has suggested doing away with the mandatory 12% contribution by employees in certain cases, while retaining the outgo for employers",
																	"Govt plans radical changes to EPF law "),
															new Item("","Activist shows banned Nirbhaya film in Delhi slum"),
															new Item("","2/3 of sewage from 118 towns flows into Ganga"),
															new Item("","BJP drops Irani, Hema, Najma from core team"),
															new Item("","InMobi finds a mentor in Nilekani"),
															new Item("","Leakgate spreads to 2 other ministries, 3 held"),
															new Item("","IIT graduate kills kin fearing HIV infection"),
															new Item("","Swine flu more dangerous than before: MIT study"),
															new Item("","Coal block auction shows CAG got figure right")
														]
										),

							new Section('Other Stories',[	new Item('','Akshay Kumar beats Salman, Shah Rukh Khan'),								
															new Item('',' After the slap, now Deepika- Anas patch up'),
															new Item("","Rajkummar Rao and Patralekha's PDA")
														]
										),

						 	new Section('India',	[	new Item('','PM Modi arrives in Lanka as final stop of his 3-nation tour'),
														new Item('',' Gandhian from Bangladesh gets peace prize'),
														new Item("","Underage couples utilize Kerala govt's waiver")
													]
										),

							new Section('City',		[	new Item('','HIV+ve student barred from attending college'),
														new Item('',"Our technical solutions will end red-tapism"),
														new Item("","Nine arrested for attack on Africans in Bengaluru")
													]
										),

						 	new Section('Entertainment',[	new Item('',"Pneumonia-struck Dilip Kumar 'fine now'")
						 								]
						 				),

							new Section('Tech',			[	new Item('',"Xiaomi Redmi 2 launched in India: First look"),
															new Item('',' Pakistani cybersecurity firm stealing Indian bureaucrats’ data: FireEye')
														]
										),

						 	new Section('World',		[	new Item('','Abu Bakr al-Baghdadi accepts allegiance of Boko Haram'),
															new Item('','Obama calls Ghani, commends effort to improve ties with Pak'),
															new Item("","Airport shut as Costa Rica volcano spews more ash")
														]
										),

							new Section('Buisiness',	[	new Item('','Sensex regains 29,000-mark, up 253 points'),
															new Item('',' Oil prices rebound in Asia'),
															new Item("","Rupee gains 7 paise against US dollar")
														]
										),

						 	new Section('Sports',		[	new Item('','World Cup: Less training, more focus for India in Auckland'),
															new Item('',' WC: Ton-up Mahmudullah steers Bangladesh to 288/7'),
															new Item("","Novak Djokovic still chasing elusive French Open title")
														]
										),

							new Section('Life & Style',	[	new Item('','Is your sex technique right?'),
															new Item('',' Soul Curry: Hunger​, t​he eye opener'),
															new Item("","Makeup melt-proof tricks you ought to try")
														]
										)
						];
											
}
				

ko.applyBindings(new TimesViewModel());