import * as express from "express";
import { customerRoutes } from '../routes/customerRoute';

export class Routes {
    
    constructor() {

    }

    public static registerRoutes(app: express.Application) {

        app.get('/', (req: any, res: any) => {
            return res.send("Server Started...");
        });
        app.use('/api/customers', customerRoutes);


    }
}