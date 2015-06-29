var d = new Date(),
       formattedDate = [(d.getMonth() + 1),
               d.getDate(),
               d.getFullYear()].join('/');    
var getlistOptions = {
        method: 'POST',
        url: "http://web.xavica.local/tdweb/api/productstage/getlist",
        headers: {
            'Content-Type': 'application/json',
        },
        json: {
            "pageNumber": 0,
            "pageSize": 0,
            "filters": [
              {
                  "modelFieldName": "categoryId",
                  "fieldValue": "1",
                  "operation": 5,
                  "logicalOperator": 0,
                  "sortBy": 0
              },
              {
                  "modelFieldName": "createdDate",
                  "fieldValue": formattedDate,
                  "operation": 15,
                  "logicalOperator": 1,
                  "sortBy": 0
              }
            ]
        }
    }
    request(getlistOptions, function (error, response, body) {
        rawProducts = JSON.parse(JSON.stringify(body));
        console.log(rawProducts);
    });
