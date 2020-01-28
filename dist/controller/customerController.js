"use strict";
//The controller is for request handling
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const customerService_1 = require("../services/customerService");
class CustomerController {
    createCustomer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield customerService_1.CustomerService.createCustomer(req);
            res.json(response);
        });
    }
    updateCustomer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield customerService_1.CustomerService.updateCustomer(req);
            res.json(response);
        });
    }
    deleteCustomer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let resposne = yield customerService_1.CustomerService.deleteCustomer(req);
            res.json(resposne);
        });
    }
    getAllCustomers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield customerService_1.CustomerService.getAllCustomers();
            res.json(response);
        });
    }
    getCustomerById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield customerService_1.CustomerService.getCustomerById(req.params.customerId);
            res.json(response);
        });
    }
}
exports.CustomerController = CustomerController;
//# sourceMappingURL=customerController.js.map