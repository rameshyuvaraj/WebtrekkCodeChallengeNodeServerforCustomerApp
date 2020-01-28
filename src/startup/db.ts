import * as mongoClient from "mongoose";

export class Database {
    private static readonly mongoDbUrl: string = "mongodb://localhost:27017/CustomerDB";

    public static connectMongoDb() {
        mongoClient.connect(this.mongoDbUrl, { useNewUrlParser: true }).then(
            function (res: any) {
                console.log("Database CustomerDB Connection Successfull.")
            }).catch(function (err: any) {
                console.error(err);
        });
    }
}