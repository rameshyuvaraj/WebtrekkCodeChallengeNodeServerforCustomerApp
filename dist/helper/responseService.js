"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResponseService {
    constructor(isValid, data, errors) {
        this.isValid = isValid;
        this.data = data;
        this.errors = errors;
    }
    static getValidResponse(data) {
        return new ResponseService(true, data, null);
    }
    static getInValidResponse(errors) {
        return new ResponseService(false, null, errors);
    }
}
exports.ResponseService = ResponseService;
//# sourceMappingURL=responseService.js.map