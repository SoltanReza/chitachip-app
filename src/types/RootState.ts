import { AdminMessagePageState } from 'app/containers/AdminMessagePage/types';
import { AdminPanelPageState } from 'app/containers/AdminPanelPage/types';
import { AppState } from 'app/containers/App/types';
import { ContactusPageState } from 'app/containers/ContactusPage/types';
import { CurrencyPageState } from 'app/containers/CurrencyPage/types';
import { FaqPageState } from 'app/containers/FaqPage/types';
import { FinalFormPageState } from 'app/containers/FinalFormPage/types';
import { FinancialInfoPageState } from 'app/containers/FinancialInfoPage/types';
import { HomePageState } from 'app/containers/HomePage/types';
import { NewsPageState } from 'app/containers/NewsPage/types';
import { PackagePageState } from 'app/containers/PackagePage/types';
import { ProfilePageState } from 'app/containers/ProfilePage/types';
import { RechargePageState } from 'app/containers/RechargePage/types';
import { RegisterPageState } from 'app/containers/RegisterPage/types';
import { TicketPageState } from 'app/containers/TicketPage/types';
import { TradInfoPageState } from 'app/containers/TradInfoPage/types';
import { TradingPageState } from 'app/containers/TradingPage/types';
import { TransactionPageState } from 'app/containers/TransactionPage/types';
import { UserManagementPageState } from 'app/containers/UserManagementPage/types';

// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  app?: AppState;
  homePage?: HomePageState;
  registerPage?: RegisterPageState;
  tradingPage?: TradingPageState;
  contactusPage?: ContactusPageState;
  faqPage?: FaqPageState;
  finalFormPage?: FinalFormPageState;
  adminPanelPage?: AdminPanelPageState;
  profilePage?: ProfilePageState;
  currencyPage?: CurrencyPageState;
  userManagementPage?: UserManagementPageState;
  rechargePage?: RechargePageState;
  transactionPage?: TransactionPageState;
  tradInfoPage?: TradInfoPageState;
  financialInfoPage?: FinancialInfoPageState;
  newsPage?: NewsPageState;
  adminMessagePage?: AdminMessagePageState;
  packagePage?: PackagePageState;
  ticketPage?: TicketPageState;

  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
