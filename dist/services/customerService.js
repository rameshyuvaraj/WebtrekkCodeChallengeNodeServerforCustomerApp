"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const responseService_1 = require("../helper/responseService");
const CustomerModel_1 = require("../models/CustomerModel");
class CustomerService {
    static createCustomer(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let customer = new CustomerModel_1.customerModel(req.body);
                yield customer.save();
                return responseService_1.ResponseService.getValidResponse(customer);
            }
            catch (err) {
                return responseService_1.ResponseService.getInValidResponse(err);
            }
        });
    }
    static updateCustomer(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //Update by findOne and update
                let customer = yield CustomerModel_1.customerModel.findByIdAndUpdate(req.params.customerId, req.body, { new: true });
                return responseService_1.ResponseService.getValidResponse(customer);
            }
            catch (err) {
                return responseService_1.ResponseService.getInValidResponse(err);
            }
        });
    }
    static deleteCustomer(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield CustomerModel_1.customerModel.findByIdAndDelete(req.params.customerId);
                return responseService_1.ResponseService.getValidResponse("Success");
            }
            catch (err) {
                return responseService_1.ResponseService.getInValidResponse(err);
            }
        });
    }
    static getAllCustomers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield CustomerModel_1.customerModel.find();
                return responseService_1.ResponseService.getValidResponse(data);
            }
            catch (err) {
                return responseService_1.ResponseService.getInValidResponse(err);
            }
        });
    }
    static getCustomerById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield CustomerModel_1.customerModel.findById(id);
                return responseService_1.ResponseService.getValidResponse(data);
            }
            catch (err) {
                return responseService_1.ResponseService.getInValidResponse(err);
            }
        });
    }
}
exports.CustomerService = CustomerService;
//# sourceMappingURL=customerService.js.map