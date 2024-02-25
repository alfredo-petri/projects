import DefaultAccount from "./default-account";

class PersonalAccount extends DefaultAccount {
  
    constructor (name: string,  identificationDocument: number, balance: number){ 
    super (name, identificationDocument, balance);
    };
};  

export default PersonalAccount;