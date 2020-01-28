import { ResponseService } from '../helper/responseService';
import { customerModel } from "../models/CustomerModel"


export class CustomerService {


    public static async createCustomer(req: any) {
        try {
            let customer = new customerModel(req.body);
            await customer.save();
            return ResponseService.getValidResponse(customer);
        } catch (err) {
            return ResponseService.getInValidResponse(err);
        }
    }

    public static async updateCustomer(req: any) {
        try {
            //Update by findOne and update
            let customer = await customerModel.findByIdAndUpdate(req.params.customerId,req.body,{new : true});
            return ResponseService.getValidResponse(customer);
        } catch (err) {
            return ResponseService.getInValidResponse(err);
        }
    }

    public static async deleteCustomer(req: any) {
        try {
            await customerModel.findByIdAndDelete(req.params.customerId);
            return ResponseService.getValidResponse("Success");
        }catch(err){
            return ResponseService.getInValidResponse(err);
        }
    }

    public static async getAllCustomers() {
        try {
            let data = await customerModel.find();
            return ResponseService.getValidResponse(data);
        } catch (err) {
            return ResponseService.getInValidResponse(err);
        }
    }

    public static async getCustomerById(id : String) {
        try {
            let data = await customerModel.findById(id);
            return ResponseService.getValidResponse(data);
        } catch (err) {
            return ResponseService.getInValidResponse(err);
        }
    }
}