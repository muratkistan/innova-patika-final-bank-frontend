import axios from "axios";

const CUSTOMER_API_URL = "/users";

class CustomerService {

    addCustomer(customer) {
        return axios.post(CUSTOMER_API_URL+"/add",customer)
    }
    getAllCustomers(){
        return axios.get(CUSTOMER_API_URL+"/getAll")
    }


    getCustomerById(customerId){
        return axios.get(CUSTOMER_API_URL+"/"+customerId)
    }

    updateCustomer(customerId,customer){
        return axios.put(CUSTOMER_API_URL+"/update/"+customerId,customer)
    }



    deleteCustomer(customerId){
        return axios.delete(CUSTOMER_API_URL+"/delete/"+customerId)
    }

  


   
}

export default new CustomerService();