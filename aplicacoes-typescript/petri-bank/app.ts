import PersonalAccount from './class/personal-account ';
import BusinessAccount from './class/business-account';
import InvestorAccount from './class/investorAccount';

const personalAccount: PersonalAccount = new PersonalAccount ("João Augusto", 154268, 1000 );

const businessAccount: BusinessAccount = new BusinessAccount ("InfoTec Soluções", 1844, 10000);
const investorAccount: InvestorAccount = new InvestorAccount ("Ana Clara", 251478, 200);

personalAccount.deposit(80);




