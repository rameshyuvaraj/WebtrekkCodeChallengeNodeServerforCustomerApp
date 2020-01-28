"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoClient = require("mongoose");
class Database {
    static connectMongoDb() {
        mongoClient.connect(this.mongoDbUrl, { useNewUrlParser: true }).then(function (res) {
            console.log("Database CustomerDB Connection Successfull.");
        }).catch(function (err) {
            console.error(err);
        });
    }
}
Database.mongoDbUrl = "mongodb://localhost:27017/CustomerDB";
exports.Database = Database;
//# sourceMappingURL=db.js.map