import { AppState } from 'app/containers/App/types';
import { BasketPageState } from 'app/containers/BasketPage/types';
import { HomePageState } from 'app/containers/HomePage/types';
import { LoginPageState } from 'app/containers/LoginPage/types';
import { ProductDetailsPageState } from 'app/containers/ProductDetailsPage/types';
import { RegisterPageState } from 'app/containers/RegisterPage/types';
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
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
