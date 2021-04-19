import { BasketPage } from 'app/containers/BasketPage/Loadable';
import { HomePage } from 'app/containers/HomePage/Loadable';
import { LoginPage } from 'app/containers/LoginPage/Loadable';
import { LogoutPage } from 'app/containers/LogoutPage/Loadable';
import { NotFoundPage } from 'app/containers/NotFoundPage/Loadable';
import { ProductDetailsPage } from 'app/containers/ProductDetailsPage/Loadable';
import { RegisterPage } from 'app/containers/RegisterPage/Loadable';
import * as React from 'react';
import {
  Route as BaseRoute,
  Router as BaseRouter,
  Switch,
} from 'react-router-dom';
import { AuthLevel } from 'types';
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
      path: Routes.productDetails,
      component: ProductDetailsPage,
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
      path: Routes.basket,
      component: BasketPage,
      auth: {
        check: AuthLevel.ALL,
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
