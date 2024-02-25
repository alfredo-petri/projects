abstract class DefaultAccount {
    private readonly accountNumber: number = Math.floor(Math.random() * 1000);
    private name: string;
    private identificationDocument: number;
    balance: number;
    private status: boolean = true;

  
    constructor(name: string, identificationDocument: number, balance: number){
      this.name = name;
      this.balance = balance;
      this.identificationDocument = identificationDocument;
    };

    // All public methods
    

    // Method to check name attribute
    getName = (): string => {
      console.log(this.name);
      return this.name;
    };

    // Method to change name attribute
    setName = (name: string): void => {
      this.name = name;
      console.log("Nome alterado com sucesso");
    };

    // Method to check account number attribute
    getAccountNumber = (): number => {
      console.log(this.accountNumber);
      return this.accountNumber;
    };
    
    // Method to check balance amount
    getBalance = (): void => {
      console.log (`O saldo atual é de R$ ${this.balance}`);
    };
  
    // Method to deposit some amount
    deposit = (balance: number): void => {
      if (this.validateStatus()) {
        console.log(`Você depositou R$ ${balance}`);
        this.balance = this.balance + balance;
        this.getBalance();
      }
    };
  
    // Method to withdraw some amount
    withDraw = (balance: number): number => {
      if ((this.balance >= balance) && this.validateStatus()){
        this.balance = this.balance - balance
        console.log(`Você sacou R$ ${balance}`);
      } else {
        console.log ("Saldo Insuficiente");
      }

      this.getBalance();
      return this.balance
    }; 

    // Method to validate account status
    validateStatus = (): boolean => {
      if (this.status) {
        return this.status;
      } else {
        console.log ("Conta inativa");
        return this.status;
      };
    };

    // All private methods

    
    // Method to change account status
    private setStatus = (): boolean => {
      if (this.balance < 0) {
        this.status = false;
      } 
      return this.status
    };
    
  };

export default DefaultAccount;