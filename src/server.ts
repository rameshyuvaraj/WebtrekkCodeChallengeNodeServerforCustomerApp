import  * as express from "express";
import * as bodyParser from "body-parser";
import {Database} from "./startup/db";
import { Routes} from './startup/routes'

class App {
    app: express.Application;
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
        Database.connectMongoDb();
        this.app.listen(3000,"localhost",function(){
            console.log("Listening to localhost port 3000");
        });
        

        Routes.registerRoutes(this.app);
    }

    private configBodyParser() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    
}

const myCardApp = new App();