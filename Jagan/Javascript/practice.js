   function NavBarLeftViewModel(){
      that.iconCodes = {
            '1': 'images/TestImages/laptop-icon.png',
            '2': "images/TestImages/tablet-icon.png",
            '3': 'images/TestImages/Mobile-icon.png',
            '4': 'images/TestImages/television-icon.png',
            '5': 'images/TestImages/menfash.png',
            '6': 'images/TestImages/suitcase.png',
            '7': 'images/TestImages/airco.png',
            '8': 'images/TestImages/wash.png',
            '9': 'images/TestImages/gaming-icon.png',
            '10': 'images/TestImages/toys.png',
            '11': 'images/TestImages/jewell.png',
            '12': 'images/TestImages/books-icon.png',
            '13': 'images/TestImages/RockGuitar.png'
        };
        that.categories = ko.observableArray([]);
             var mappedItems = _.map(data, function (item) {
                return {
                    id: item.id,
                    menuItem: item.name,
                    iconCode: that.iconCodes[item.id]
                };
            });
             that.categories(mappedItems);
            console.log("data===",data);
            console.log("item.id===",item.id);
            console.log("iconcodes to items",that.iconCodes[item.id]);
            console.log("mappedItems to  categories is",that.categories(mappedItems));
      }