/**
 *
 * Navbar
 *
 */
import { ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import { Input, message } from 'antd';
import { BasketHeader } from 'app/components/BasketHeader';
import { Routes } from 'app/containers/App/Router/routes';
import { selectAuth } from 'app/containers/App/selectors';
import { translations } from 'locales/i18n';
import React, { memo, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
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
  const handleshowEmptyBasket = useCallback(() => {
    if (!authData.data) {
      message.info('برای دیدن سبد خرید لطفا ابتدا وارد سامانه شوید');
    }
  }, [authData]);

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
          <li className="searchBar">
            <Search
              placeholder="جستجو"
              style={{ width: 300, color: '#ff2222fsd1', opacity: '1' }}
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
            <a onClick={handleshowEmptyBasket}>
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
