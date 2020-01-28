import { Router } from 'express';
import {CustomerController} from '../controller/customerController'

const customerController = new CustomerController();

export const customerRoutes : Router = Router();

customerRoutes.post('/',customerController.createCustomer);

customerRoutes.put('/:customerId',customerController.updateCustomer);

customerRoutes.get('/',customerController.getAllCustomers);

customerRoutes.delete('/:customerId',customerController.deleteCustomer);

customerRoutes.get('/:customerId',customerController.getCustomerById);

