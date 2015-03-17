function W3Header(imageUrl, captionImage,contentIamge1Url,contentIamge2Url,contentIamge3Url,contentIamge4Url)
{
	this.imageUrl=imageUrl;
	this.captionImage=captionImage;
	this.contentIamge1Url=contentIamge1Url;
	this.contentIamge2Url=contentIamge2Url;
	this.contentIamge3Url=contentIamge3Url;
	this.contentIamge4Url=contentIamge4Url;
};
function W3SchoolsViewModel()
{
	this.contents=	[	new W3Header('Images/W3Schools1.jpg','Images/W3Schools2.jpg',
										'Images/W3Schools3.jpg','Images/W3Schools4.jpg',
										'Images/W3Schools5.jpg','Images/W3Schools6.jpg'
									)
					]
									
}
ko.applyBindings(new W3SchoolsViewModel());
