import { AdminMessagePage } from 'app/containers/AdminMessagePage/Loadable';
import { AdminPanelPage } from 'app/containers/AdminPanelPage/Loadable';
import { ContactusPage } from 'app/containers/ContactusPage/Loadable';
import { CurrencyPage } from 'app/containers/CurrencyPage/Loadable';
import { FaqPage } from 'app/containers/FaqPage/Loadable';
import { FinalFormPage } from 'app/containers/FinalFormPage/Loadable';
import { FinancialInfoPage } from 'app/containers/FinancialInfoPage/Loadable';
import { HomePage } from 'app/containers/HomePage/Loadable';
import { LoginPage } from 'app/containers/LoginPage/Loadable';
import { LogoutPage } from 'app/containers/LogoutPage/Loadable';
import { NewsPage } from 'app/containers/NewsPage/Loadable';
import { NotFoundPage } from 'app/containers/NotFoundPage/Loadable';
import { PackagePage } from 'app/containers/PackagePage/Loadable';
import { ProfilePage } from 'app/containers/ProfilePage/Loadable';
import { RechargePage } from 'app/containers/RechargePage/Loadable';
import { RegisterPage } from 'app/containers/RegisterPage/Loadable';
import { TicketPage } from 'app/containers/TicketPage/Loadable';
import { TradInfoPage } from 'app/containers/TradInfoPage/Loadable';
import { TradingPage } from 'app/containers/TradingPage/Loadable';
import { TransactionPage } from 'app/containers/TransactionPage/Loadable';
import { UserManagementPage } from 'app/containers/UserManagementPage/Loadable';
import * as React from 'react';
import {
  Route as BaseRoute,
  Router as BaseRouter,
  Switch,
} from 'react-router-dom';
import { AuthLevel, AuthRoles } from 'types';
import { history } from 'utils/history';
import Route from './Route';
import { Routes } from './routes';
import { RouteConfig } from './types';

export const Router = () => {
  const ROUTES: Array<RouteConfig> = [
    {
      exact: true,
      path: Routes.home,
      component: HomePage,
      auth: {
        check: AuthLevel.ALL,
      },
    },
    {
      exact: true,
      path: Routes.login,
      component: LoginPage,
      auth: {
        check: AuthLevel.UNAUTHENTICATED,
      },
    },
    {
      exact: true,
      path: Routes.register,
      component: RegisterPage,
      auth: {
        check: AuthLevel.UNAUTHENTICATED,
      },
    },
    {
      exact: true,
      path: Routes.logout,
      component: LogoutPage,
      auth: {
        check: AuthLevel.AUTHENTICATED,
      },
    },
    {
      exact: true,
      path: Routes.trading,
      component: TradingPage,
      auth: {
        check: AuthLevel.ALL,
      },
    },
    {
      exact: true,
      path: Routes.contactUs,
      component: ContactusPage,
      auth: {
        check: AuthLevel.ALL,
      },
    },
    {
      exact: true,
      path: Routes.faq,
      component: FaqPage,
      auth: {
        check: AuthLevel.ALL,
      },
    },
    {
      exact: true,
      path: Routes.finalForm,
      component: FinalFormPage,
      auth: {
        check: AuthLevel.AUTHENTICATED,
        roles: [AuthRoles.MANAGER, AuthRoles.REGULAR],
      },
    },
    {
      exact: true,
      path: Routes.dashboard,
      component: AdminPanelPage,
      auth: {
        check: AuthLevel.AUTHENTICATED,
      },
    },
    {
      exact: true,
      path: Routes.profile,
      component: ProfilePage,
      auth: {
        check: AuthLevel.AUTHENTICATED,
      },
    },
    {
      exact: true,
      path: Routes.currency,
      component: CurrencyPage,
      auth: {
        check: AuthLevel.AUTHENTICATED,
      },
    },
    {
      exact: true,
      path: Routes.userManagement,
      component: UserManagementPage,
      auth: {
        check: AuthLevel.AUTHENTICATED,
      },
    },
    {
      exact: true,
      path: Routes.recharge,
      component: RechargePage,
      auth: {
        check: AuthLevel.AUTHENTICATED,
      },
    },
    {
      exact: true,
      path: Routes.transaction,
      component: TransactionPage,
      auth: {
        check: AuthLevel.AUTHENTICATED,
      },
    },
    {
      exact: true,
      path: Routes.tradeInfo,
      component: TradInfoPage,
      auth: {
        check: AuthLevel.AUTHENTICATED,
      },
    },
    {
      exact: true,
      path: Routes.financialInfo,
      component: FinancialInfoPage,
      auth: {
        check: AuthLevel.AUTHENTICATED,
      },
    },
    {
      exact: true,
      path: Routes.news,
      component: NewsPage,
      auth: {
        check: AuthLevel.AUTHENTICATED,
      },
    },
    {
      exact: true,
      path: Routes.adminMessage,
      component: AdminMessagePage,
      auth: {
        check: AuthLevel.AUTHENTICATED,
      },
    },
    {
      exact: true,
      path: Routes.package,
      component: PackagePage,
      auth: {
        check: AuthLevel.AUTHENTICATED,
      },
    },
    {
      exact: true,
      path: Routes.ticket,
      component: TicketPage,
      auth: {
        check: AuthLevel.AUTHENTICATED,
      },
    },
  ];
  return (
    <BaseRouter history={history}>
      <Switch>
        {ROUTES.map(route => (
          <Route key={route.path} {...route} />
        ))}

        <BaseRoute component={NotFoundPage} />
      </Switch>
    </BaseRouter>
  );
};
