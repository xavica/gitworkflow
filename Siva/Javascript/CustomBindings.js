function MobilesViewModel()
{
    var that = this;

    that.mobiles = ko.observableArray([{
                                            comapny: 'Xiomi',
                                            imageUrl:'Images/Redmi2.jpeg',
                                            cost: 6999,
                                            features:['4.7 inch HD IPS Disp','4G LTE, Dual SIM',
                                                        'Camera: 8MP|2MP','64-bit, Snapdragon 410']
                                        },
                                        {   
                                            comapny: 'Mi4 64 GB (White)',
                                            imageUrl:'Images/Mi4.jpeg',
                                            cost: 23999,
                                            features:['13 MP Primary Camera','8 MP Secondary Camera',
                                                        'Android v4.4 OS','5-inch Touchscreen']
                                        },
                                        {   
                                            comapny: 'Honor 4X (Black)',
                                            imageUrl:'Images/Honor4X.jpeg',
                                            cost: 10499,
                                            features:['13 MP Primary Camera','Android v4.4 OS',
                                                        '5 MP Secondary Camera','Dual Sim (LTE + LTE)']
                                        }, 
                                        {   
                                            comapny: 'Samsung Galaxy S6 Edge ',
                                            imageUrl:'Images/SamsungGalaxyS6.jpeg',
                                            cost: 58900,
                                            features:['5.1-inch Touchscreen','Android v5 Lollipop',
                                                        '2.1 GHz + 1.5 GHz ','16 MP Primary Camera']
                                        },     
                                      ]
                                     );

}

ko.bindingHandlers.status = {
                                init: function (element, valueAccessor) {
                                    var price = valueAccessor(); 
                                    ko.applyBindingsToNode(element, {
                                        css: {
                                                green: price < 10000 ,
                                                blue: price > 10000 && price <= 25000 ,
                                                red: price > 25000
                                            },

                                    });
                                }
                            }

ko.bindingHandlers.mobileStatus = {
                                    init: function (element, valueAccessor, allBindings) 
                                    {
                                        var st = valueAccessor();
                                        console.log('hai');
                                        ko.applyBindingsToNode(element, 
                                        {
                                            css: {
                                                    borderGreen: st < 10000 ,
                                                    borderBlue: st > 10000 && st <= 25000 ,
                                                    borderRed: st > 25000
                                                }

                                        });

                                    }
                                    
                                    
                                };

$(document).ready(function () {
    ko.applyBindings(new MobilesViewModel());
});