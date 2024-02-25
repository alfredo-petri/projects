import DefaultAccount from "./default-account";

class BusinessAccount extends DefaultAccount {
    constructor (name: string,  identificationDocument: number, balance: number){ 
      super (name, identificationDocument, balance) ;
    };
  
    getLoan = (balance: number) : number  => {
      if (this.validateStatus()){
        if (((this.balance)*0.7) >= balance){
          this.balance = this.balance + balance
          console.log(`Você pegou um empréstismo de R$ ${balance}`);
        } else {
          console.log (`Emprestimo negado, o valor máximo de empréstimo liberado é de R$ ${(this.balance)*0.7 }`);
        }
      }
      this.getBalance();
      return this.balance
    };    
};

export default BusinessAccount;