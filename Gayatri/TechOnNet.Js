function Header(contentHeading,headerContents)
{
	this.contentHeading = contentHeading;
	this.headerContents = headerContents;
};
function HeaderContents(contentName)
{
	this.contentName = contentName;
};

function Subject(subjectHeading,subjectNames)
{
	this.subjectHeading = subjectHeading;
	this.subjectNames = subjectNames;
};
function SubjectName(subjectName)
{
	this.subjectName = subjectName;
};

function MainContent(mainHeading,subHeadings)
{
	this.mainHeading = mainHeading;
	this.subHeadings = subHeadings;
};
function SubjectDetails(subHeading,subjectDescription)
{
	this.subHeading = subHeading;
	this.subjectDescription = subjectDescription;
};
function Page(header,subject,mainContent)
{
	this.header = header;
	this.subject = subject;
	this.mainContent = mainContent;
};

function TechOnNetViewModel()
{
	this.items = [new Page(
						[new Header("TechOnNet",[
													new HeaderContents("home"),
													new HeaderContents("About Us"),
													new HeaderContents("Feedback"),
													new HeaderContents("SiteMap")
												]
									)], 
						[new Subject("Database",[
												 new SubjectName("SQL"),
												 new SubjectName("PlSql"),
												 new SubjectName("Sql Server")
												]
									),
						new Subject("Microsoft",[new SubjectName("Excel"),
												 new SubjectName("Access"),
												 new SubjectName("Word")
												 ]
									)] ,
						[new MainContent("Learn Database Technologies",
							[new SubjectDetails("SQL Tutorial","Learn SQL with our step-by-step tutorial and references."),
							new SubjectDetails("Oracle Tutorial","Learn Oracle and PLSQL with our step-by-step tutorial and references. "),
							new SubjectDetails("SQL Server Tutorial","Learn SQL Server and Transact-SQL (T-SQL) with our step-by-step tutorial and references."),
							new SubjectDetails("MySQL Tutorial","Learn MySQL and its programming environment with our step-by-step tutorial and references.") 
							])
						]
						 
	  ) ] 
				
};

ko.applyBindings(new TechOnNetViewModel());


