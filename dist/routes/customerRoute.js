"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customerController_1 = require("../controller/customerController");
const customerController = new customerController_1.CustomerController();
exports.customerRoutes = express_1.Router();
exports.customerRoutes.post('/', customerController.createCustomer);
exports.customerRoutes.put('/:customerId', customerController.updateCustomer);
exports.customerRoutes.get('/', customerController.getAllCustomers);
exports.customerRoutes.delete('/:customerId', customerController.deleteCustomer);
exports.customerRoutes.get('/:customerId', customerController.getCustomerById);
//# sourceMappingURL=customerRoute.js.map