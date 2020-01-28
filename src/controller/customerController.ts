//The controller is for request handling

import {CustomerService} from "../services/customerService"
import {Request, Response} from "express";


export class CustomerController {
    public async createCustomer(req : Request , res : Response){
        let response:any = await CustomerService.createCustomer(req);
        res.json(response);
    }

    public async updateCustomer(req : Request , res : Response){
        let response:any = await CustomerService.updateCustomer(req);
        res.json(response);
    }

    public async deleteCustomer(req : Request , res : Response){
        let resposne:any = await CustomerService.deleteCustomer(req);
        res.json(resposne);
    }

    public async getAllCustomers(req : Request , res : Response){
        let response : any = await CustomerService.getAllCustomers();
        res.json(response);
    }

    public async getCustomerById(req : Request , res : Response){
        let response : any = await CustomerService.getCustomerById(req.params.customerId);
        res.json(response);
    }
}