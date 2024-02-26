import DefaultAccount from "./default-account";

class InvestorAccount extends DefaultAccount {
  
    constructor ( name: string, identificationDocument: number, balance: number){ 
    super (name, identificationDocument, balance);
    

    // Method to deposit some amount
    this.deposit = (balance: number): void => {
        if (this.validateStatus()) {
          console.log(`Você depositou R$ ${balance.toFixed(2)} e recebeu + R$ 10.00 por ser um sócio investidor`);
          this.balance = this.balance + (balance + 10);
          this.getBalance();
        }
      };
    };
};  

export default InvestorAccount;