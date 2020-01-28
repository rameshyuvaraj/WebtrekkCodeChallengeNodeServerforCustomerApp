"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoClient = require("mongoose");
const schema = mongoClient.Schema;
const customerSchema = new schema({
    name: {
        type: String,
        required: true
    },
    address: String,
    email: String,
    mobile: String
});
exports.customerModel = mongoClient.model('customerModel', customerSchema);
//# sourceMappingURL=CustomerModel.js.map