import { AppState } from 'app/containers/App/types';
import { BasketPageState } from 'app/containers/BasketPage/types';
import { HomePageState } from 'app/containers/HomePage/types';
import { LoginPageState } from 'app/containers/LoginPage/types';
import { PaymentCallbackPageState } from 'app/containers/PaymentCallbackPage/types';
import { ProductDetailsPageState } from 'app/containers/ProductDetailsPage/types';
import { ProductListPageState } from 'app/containers/ProductListPage/types';
import { RegisterPageState } from 'app/containers/RegisterPage/types';
import { ResetPasswordPageState } from 'app/containers/ResetPasswordPage/types';
import { SendInfoPageState } from 'app/containers/SendInfoPage/types';
import { UserProfilePageState } from 'app/containers/UserProfilePage/types';

// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  app?: AppState;
  homePage?: HomePageState;
  loginPage?: LoginPageState;
  registerPage?: RegisterPageState;
  productDetailsPage?: ProductDetailsPageState;
  basketPage?: BasketPageState;
  userProfilePage?: UserProfilePageState;
  resetPasswordPage?: ResetPasswordPageState;
  productListPage?: ProductListPageState;
  sendInfoPage?: SendInfoPageState;
  paymentCallbackPage?: PaymentCallbackPageState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
