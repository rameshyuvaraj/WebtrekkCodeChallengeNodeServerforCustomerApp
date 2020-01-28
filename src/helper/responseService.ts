export class ResponseService {
    isValid: boolean;
    data: any;
    errors: any;

    constructor(isValid: boolean, data: any, errors: any) {
        this.isValid = isValid;
        this.data = data;
        this.errors = errors;
    }

    public static getValidResponse(data: any) {
        return new ResponseService(true, data, null);
    }

    public static getInValidResponse(errors: any) {
        return new ResponseService(false, null, errors);
    }
}