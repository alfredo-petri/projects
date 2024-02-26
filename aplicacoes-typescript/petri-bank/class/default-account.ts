abstract class DefaultAccount {
    private readonly accountNumber: number = Math.floor(Math.random() * 1000);
    private name: string;
    private identificationDocument: number;
    balance: number;
    private status: boolean = true;

  
    constructor(name: string, identificationDocument: number, balance: number){
      this.name = name;
      this.identificationDocument = identificationDocument;
      this.balance = balance;
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
      console.log (`O saldo atual é de R$ ${this.balance.toFixed(2)}`);
    };
  
    // Method to deposit some amount
    deposit = (amount: number): void => {
      if (this.validateStatus()) {
        console.log(`Você depositou R$ ${amount.toFixed(2)}`);
        this.balance += amount;
        this.getBalance();
      }
    };
  
    // Method to withdraw some amount
    withDraw = (amount: number): void => {
      if ((this.balance >= amount) && this.validateStatus()){
        this.balance -= amount;
        console.log(`Você sacou R$ ${amount.toFixed(2)}`);
      } else {
        console.log ("Saldo Insuficiente");
      }
      this.getBalance();
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
    private setStatus = (): void => {
      if (this.balance < 0) {
        this.status = false;
      } 
    };
    
  };

export default DefaultAccount;