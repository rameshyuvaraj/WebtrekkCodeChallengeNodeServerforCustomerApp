import * as mongoClient from "mongoose";

const schema = mongoClient.Schema;

const customerSchema  = new schema({
    name : {
        type : String,
        required :  true
    },
    address : String,
    email : String,
    mobile : String
});

export const customerModel = mongoClient.model('customerModel',customerSchema);