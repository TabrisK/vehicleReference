/**
 * Created by Helex on 2017/2/3.
 */
"use strict";
var bodyParser = require('body-parser');
var _ = require('lodash');
module.exports = api;

function api(app) {
    app.use(bodyParser.json()); // for parsing application/json
    app.get("/api/vehicles/page/:page/size/:size", function (req, res) {
        let page = Number(req.params["page"]);
        let size = Number(req.params["size"]);
        //start at 1
        let list = _.compact(vehicleInfo.slice((page - 1) * size, page * size));
        setTimeout(function(){
            res.send(list);
        },1500);
    });

    app.get("/api/vehicle/:id", function (req, res) {
        res.send(vehicleInfo);
    });

    app.post("/api/vehicles", function (req, res) {
        req.body.id = vehicleInfo.length;
        vehicleInfo.push(req.body);
        res.status(200).send({code: 0});
    })
}

let vehicleInfo = [
    {
        "id": 1,
        "plate": "沪A7xxxx",
        "brand": "TOYOTA",
        "contact": "HELEX",
        "phone": "13262607231"
    },
    {
        "id": 2,
        "plate": "沪A3xxxx",
        "brand": "BMW",
        "contact": "Nick",
        "phone": "1xxxxxxxxxx"
    },
    {
        "id": 5,
        "plate": "沪C7Nxxxx",
        "brand": "Cadillac",
        "contact": "Obama",
        "phone": "1xxxxxxxxxx"
    },
    {
        "id": 4,
        "plate": "沪ANxxxx",
        "brand": "Lexus",
        "contact": "Rosemond",
        "phone": "1xxxxxxxxxx"
    },
    {
        "id": 7,
        "plate": "沪A2xxxx",
        "brand": "Benz",
        "contact": "Sherry",
        "phone": "1xxxxxxxxxx"
    },
    {
        "id": 6,
        "plate": "浙Nxxxx",
        "brand": "Chevrolet",
        "contact": "Trump",
        "phone": "1xxxxxxxxxx"
    },
    {
        "id": 3,
        "plate": "沪B1xxxx",
        "brand": "Audi",
        "contact": "Yijun",
        "phone": "1xxxxxxxxxx"
    },
    {
        "id": 8,
        "plate": "沪Gxxxxx",
        "brand": "Audi",
        "contact": "laosiji",
        "phone": "1xxxxxxxxxx"
    },
    {
        "id": 9,
        "plate": "沪Gxxxxx",
        "brand": "Audi",
        "contact": "Andy",
        "phone": "1xxxxxxxxxx"
    },
    {
        "id": 10,
        "plate": "沪Gxxxxx",
        "brand": "Audi",
        "contact": "Frank",
        "phone": "1xxxxxxxxxx"
    },
    {
        "id": 11,
        "plate": "沪Gxxxxx",
        "brand": "Audi",
        "contact": "xiaosiji",
        "phone": "1xxxxxxxxxx"
    },{
        "id": 12,
        "plate": "沪A7xxxx",
        "brand": "TOYOTA",
        "contact": "HELEX",
        "phone": "13262607231"
    },
    {
        "id": 13,
        "plate": "沪A3xxxx",
        "brand": "BMW",
        "contact": "Nick",
        "phone": "1xxxxxxxxxx"
    },
    {
        "id": 14,
        "plate": "沪C7Nxxxx",
        "brand": "Cadillac",
        "contact": "Obama",
        "phone": "1xxxxxxxxxx"
    },
    {
        "id": 15,
        "plate": "沪ANxxxx",
        "brand": "Lexus",
        "contact": "Rosemond",
        "phone": "1xxxxxxxxxx"
    },
    {
        "id": 16,
        "plate": "沪A2xxxx",
        "brand": "Benz",
        "contact": "Sherry",
        "phone": "1xxxxxxxxxx"
    },
    {
        "id": 17,
        "plate": "浙Nxxxx",
        "brand": "Chevrolet",
        "contact": "Trump",
        "phone": "1xxxxxxxxxx"
    },
    {
        "id": 18,
        "plate": "沪B1xxxx",
        "brand": "Audi",
        "contact": "Yijun",
        "phone": "1xxxxxxxxxx"
    },
    {
        "id": 19,
        "plate": "沪Gxxxxx",
        "brand": "Audi",
        "contact": "laosiji",
        "phone": "1xxxxxxxxxx"
    },
    {
        "id": 20,
        "plate": "沪Gxxxxx",
        "brand": "Audi",
        "contact": "Andy",
        "phone": "1xxxxxxxxxx"
    },
    {
        "id": 21,
        "plate": "沪Gxxxxx",
        "brand": "Audi",
        "contact": "Frank",
        "phone": "1xxxxxxxxxx"
    },
    {
        "id": 22,
        "plate": "沪Gxxxxx",
        "brand": "Audi",
        "contact": "xiaosiji",
        "phone": "1xxxxxxxxxx"
    },
    {
        "id": 23,
        "plate": "沪A3xxxx",
        "brand": "BMW",
        "contact": "Nick",
        "phone": "1xxxxxxxxxx"
    },
    {
        "id": 24,
        "plate": "沪C7Nxxxx",
        "brand": "Cadillac",
        "contact": "Obama",
        "phone": "1xxxxxxxxxx"
    },
    {
        "id": 25,
        "plate": "沪ANxxxx",
        "brand": "Lexus",
        "contact": "Rosemond",
        "phone": "1xxxxxxxxxx"
    },
    {
        "id": 26,
        "plate": "沪A2xxxx",
        "brand": "Benz",
        "contact": "Sherry",
        "phone": "1xxxxxxxxxx"
    },
    {
        "id": 27,
        "plate": "浙Nxxxx",
        "brand": "Chevrolet",
        "contact": "Trump",
        "phone": "1xxxxxxxxxx"
    },
    {
        "id": 28,
        "plate": "沪B1xxxx",
        "brand": "Audi",
        "contact": "Yijun",
        "phone": "1xxxxxxxxxx"
    },
    {
        "id": 29,
        "plate": "沪Gxxxxx",
        "brand": "Audi",
        "contact": "laosiji",
        "phone": "1xxxxxxxxxx"
    },
    {
        "id": 30,
        "plate": "沪Gxxxxx",
        "brand": "Audi",
        "contact": "Andy",
        "phone": "1xxxxxxxxxx"
    },
    {
        "id": 31,
        "plate": "沪Gxxxxx",
        "brand": "Audi",
        "contact": "Frank",
        "phone": "1xxxxxxxxxx"
    },
    {
        "id": 32,
        "plate": "沪Gxxxxx",
        "brand": "Audi",
        "contact": "xiaosiji",
        "phone": "1xxxxxxxxxx"
    }
];