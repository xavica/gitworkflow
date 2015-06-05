var request = $.ajax({
    url: "http://localhost:16193/api/productstage/getall",
    method: "GET",
    dataType: 'json',
});
request.done(function (data) {
    var mappedItems = _.map(data, function (item) {
        return {
            id: item.id,
            menuItem: item.name,
            iconCode: that.iconCodes[item.id]
        };
    });
});