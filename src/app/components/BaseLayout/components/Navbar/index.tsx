/**
 *
 * Navbar
 *
 */
import { ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import { Input, Menu } from 'antd';
import { BasketHeader } from 'app/components/BasketHeader';
import { Routes } from 'app/containers/App/Router/routes';
import { selectAuth } from 'app/containers/App/selectors';
import { translations } from 'locales/i18n';
import React, { memo, useCallback, useMemo } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { AuthRoles } from 'types';
import { StyledNavbar } from './styles';

interface Props {
  className?: string;
}
const { Search } = Input;

export const Navbar = memo(({ className }: Props) => {
  const { t } = useTranslation();
  const history = useHistory();
  const location = useLocation();
  const authData = useSelector(selectAuth);
  const [showBasket, setShowBasket] = useState(false);
  const menus = useMemo(
    () => [
      {
        route: Routes.home,
        title: t(translations.layouts.base.menus.home),
        doRender: false,
      },
      {
        route: Routes.login,
        title: t(translations.layouts.base.menus.login),
        doRender: !authData.isAuthenticated(),
      },
      // {
      //   route: Routes.register,
      //   title: t(translations.layouts.base.menus.register),
      //   doRender: !authData.isAuthenticated(),
      // },

      {
        route: Routes.dashboard,
        title: t(translations.layouts.base.menus.adminPanel),
        doRender: authData.isAuthenticated(),
      },

      {
        route: Routes.contactUs,
        title: t(translations.layouts.base.menus.contactUs),
        doRender: true,
      },
      {
        route: Routes.faq,
        title: t(translations.layouts.base.menus.faq),
        doRender: true,
      },
    ],
    [authData, t],
  );

  const handleRedirect = useCallback(
    e => {
      const routePath = e.key;
      history.push(routePath);
    },
    [history],
  );
  const handleRoutToLogin = useCallback(() => history.push(Routes.login), [
    history,
  ]);
  const handleRoutToHome = useCallback(() => history.push(Routes.home), [
    history,
  ]);

  const handleRedirectToLogoutPage = useCallback(
    () => history.push(Routes.logout),
    [history],
  );
  const handleRedirectToBasketPage = useCallback(
    () => setShowBasket(true),
    //  history.push(Routes.basket),
    [],
  );

  const handleRedirectToUserProfilePage = useCallback(
    () => history.push(Routes.userProfile),
    [history],
  );

  return (
    <StyledNavbar className={`Navbar ${className || ''}`}>
      {/* <div className="logo" onClick={handleRoutToHome} /> */}
      {authData.data ? (
        <ul>
          <li>
            <a onClick={handleRedirectToUserProfilePage}>
              {' '}
              <UserOutlined /> پروفایل
            </a>
          </li>

          <li className="basket">
            <a>
              <ShoppingOutlined /> سبد خرید
            </a>
            <BasketHeader />
          </li>
          <li>
            <Search
              placeholder="جستجو"
              style={{ width: 200 }}
              className="searchStyle"
            />
          </li>
          <li style={{ float: 'left' }}>
            <div className="logo" onClick={handleRoutToHome} />
            {/* <a className="active" href="#about">
             About
           </a> */}
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <a onClick={handleRoutToLogin}>
              {' '}
              <UserOutlined /> ثبت نام / ورود
            </a>
          </li>

          <li className="basket">
            <a>
              <ShoppingOutlined /> سبد خرید
            </a>
            {/* <BasketHeader /> */}
          </li>
          <li>
            <Search
              placeholder="جستجو"
              style={{ width: 200 }}
              className="searchStyle"
            />
          </li>
          <li style={{ float: 'left' }}>
            <div className="logo" onClick={handleRoutToHome} />
            {/* <a className="active" href="#about">
            About
          </a> */}
          </li>
        </ul>
      )}
    </StyledNavbar>
  );
});
