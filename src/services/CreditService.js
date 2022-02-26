import axios from "axios";

const CREDIT_API_URL = "/credits";

class CreditService{

    addCredit(customer){
        return axios.post(CREDIT_API_URL+"/calculate",customer);
    }

    getAllCredits(){
        return axios.get(CREDIT_API_URL+"/getAll");
    }

    getAllCreditsByIdentityNumber(identityNumber){
        return axios.get(CREDIT_API_URL+"/all/"+identityNumber);
    }

}

export default new CreditService();