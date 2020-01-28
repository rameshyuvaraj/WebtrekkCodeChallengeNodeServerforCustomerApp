"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customerRoute_1 = require("../routes/customerRoute");
class Routes {
    constructor() {
    }
    static registerRoutes(app) {
        app.get('/', (req, res) => {
            return res.send("Server Started...");
        });
        app.use('/api/customers', customerRoute_1.customerRoutes);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map