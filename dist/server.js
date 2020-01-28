"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const db_1 = require("./startup/db");
const routes_1 = require("./startup/routes");
class App {
    constructor() {
        this.app = express();
        this.app.use(function (req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
            res.setHeader('Access-Control-Allow-Credentials', 'true');
            next();
        });
        this.configBodyParser();
        db_1.Database.connectMongoDb();
        this.app.listen(3000, "localhost", function () {
            console.log("Listening to localhost port 3000");
        });
        routes_1.Routes.registerRoutes(this.app);
    }
    configBodyParser() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}
const myCardApp = new App();
//# sourceMappingURL=server.js.map