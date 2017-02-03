/**
 * Created by Helex on 2017/2/3.
 */
"use strict";
module.exports = api;

function api(app) {
    app.get("/api/vehicles", function (req, res) {
        res.send(vehicleInfo);
    });

    app.get("/api/vehicle/:id", function (req, res) {
        res.send(vehicleInfo);
    });
}

let vehicleInfo = [
    {
        "id": 1,
        "plate": "沪A7xxxx",
        "brand": "VOLVO",
        "contact": "HELEX",
        "phone": "13262607231"
    },
    {
        "id": 2,
        "plate": "沪A2xxxx",
        "brand": "Benz",
        "contact": "Sherry",
        "phone": "1xxxxxxxxxx"
    },
    {
        "id": 3,
        "plate": "沪A3xxxx",
        "brand": "BMW",
        "contact": "Nick",
        "phone": "1xxxxxxxxxx"
    },
    {
        "id": 4,
        "plate": "沪B1xxxx",
        "brand": "Audi",
        "contact": "Yijun",
        "phone": "1xxxxxxxxxx"
    },
    {
        "id": 5,
        "plate": "沪ANxxxx",
        "brand": "Lexus",
        "contact": "Rosemond",
        "phone": "1xxxxxxxxxx"
    }
];